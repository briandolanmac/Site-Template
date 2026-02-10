"use client";

import { useEffect } from "react";
import HomePage from "./HomePage";

const HomePageClient = () => {
  useEffect(() => {
    const cleanupHandlers: Array<() => void> = [];
    const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
    const mobileToggle = document.querySelector<HTMLButtonElement>(
      "[data-mobile-toggle]"
    );
    const mobileClose = document.querySelector<HTMLButtonElement>(
      "[data-mobile-close]"
    );

    const openMobileMenu = () => {
      if (mobileMenu) {
        mobileMenu.hidden = false;
        document.body.style.overflow = "hidden";
      }
    };

    const closeMobileMenu = () => {
      if (mobileMenu) {
        mobileMenu.hidden = true;
        document.body.style.overflow = "";
      }
      document.querySelectorAll<HTMLElement>(".nav-mobile-panel").forEach((panel) => {
        panel.hidden = true;
      });
      document
        .querySelectorAll<HTMLElement>(".nav-mobile-accordion")
        .forEach((btn) => {
          btn.removeAttribute("data-open");
        });
    };

    if (mobileToggle) {
      const handleMobileToggle = () => {
        if (mobileMenu && mobileMenu.hidden) {
          openMobileMenu();
        } else {
          closeMobileMenu();
        }
      };
      mobileToggle.addEventListener("click", handleMobileToggle);
      cleanupHandlers.push(() =>
        mobileToggle.removeEventListener("click", handleMobileToggle)
      );
    }

    if (mobileClose) {
      mobileClose.addEventListener("click", closeMobileMenu);
      cleanupHandlers.push(() =>
        mobileClose.removeEventListener("click", closeMobileMenu)
      );
    }

    document
      .querySelectorAll<HTMLButtonElement>(".nav-mobile-accordion")
      .forEach((btn) => {
        const handleAccordion = () => {
          const panelId = btn.getAttribute("data-accordion");
          const panel = document.querySelector<HTMLElement>(
            `.nav-mobile-panel[data-panel="${panelId}"]`
          );
          if (!panel) return;

          const isOpen = !panel.hidden;

          document
            .querySelectorAll<HTMLElement>(".nav-mobile-panel")
            .forEach((p) => {
              p.hidden = true;
            });
          document
            .querySelectorAll<HTMLElement>(".nav-mobile-accordion")
            .forEach((b) => {
              b.removeAttribute("data-open");
            });

          if (!isOpen) {
            panel.hidden = false;
            btn.setAttribute("data-open", "true");
          }
        };

        btn.addEventListener("click", handleAccordion);
        cleanupHandlers.push(() =>
          btn.removeEventListener("click", handleAccordion)
        );
      });

    document.querySelectorAll<HTMLAnchorElement>(".nav-mobile a").forEach((link) => {
      const handleLinkClick = () => closeMobileMenu();
      link.addEventListener("click", handleLinkClick);
      cleanupHandlers.push(() =>
        link.removeEventListener("click", handleLinkClick)
      );
    });

    const dropdownWraps = Array.from(
      document.querySelectorAll<HTMLElement>(".nav-dd-wrap[data-dropdown]")
    );

    dropdownWraps.forEach((wrap) => {
      const btn = wrap.querySelector<HTMLButtonElement>(".nav-dd-btn");
      const panel = wrap.querySelector<HTMLElement>(".nav-dd");
      if (!btn || !panel) return;

      const handleDropdownClick = (event: MouseEvent) => {
        event.stopPropagation();
        const isOpen = wrap.getAttribute("data-open") === "true";

        dropdownWraps.forEach((other) => {
          other.removeAttribute("data-open");
          const otherPanel = other.querySelector<HTMLElement>(".nav-dd");
          if (otherPanel) otherPanel.hidden = true;
          const otherButton = other.querySelector<HTMLButtonElement>(".nav-dd-btn");
          if (otherButton) otherButton.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          wrap.setAttribute("data-open", "true");
          panel.hidden = false;
          btn.setAttribute("aria-expanded", "true");
        }
      };

      btn.addEventListener("click", handleDropdownClick);
      cleanupHandlers.push(() =>
        btn.removeEventListener("click", handleDropdownClick)
      );
    });

    const handleDocumentClick = (event: MouseEvent) => {
      dropdownWraps.forEach((wrap) => {
        if (!wrap.contains(event.target as Node)) {
          wrap.removeAttribute("data-open");
          const panel = wrap.querySelector<HTMLElement>(".nav-dd");
          if (panel) panel.hidden = true;
          const btn = wrap.querySelector<HTMLButtonElement>(".nav-dd-btn");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });
    };
    document.addEventListener("click", handleDocumentClick);
    cleanupHandlers.push(() =>
      document.removeEventListener("click", handleDocumentClick)
    );

    dropdownWraps.forEach((wrap) => {
      const handleWrapClick = (event: MouseEvent) => event.stopPropagation();
      wrap.addEventListener("click", handleWrapClick);
      cleanupHandlers.push(() =>
        wrap.removeEventListener("click", handleWrapClick)
      );
    });

    const video = document.getElementById("intro-video") as HTMLVideoElement | null;
    const videoBtn = document.getElementById(
      "video-play-btn"
    ) as HTMLButtonElement | null;

    let videoObserver: IntersectionObserver | null = null;

    if (video && videoBtn) {
      const handleVideoToggle = () => {
        if (video.paused) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      };

      const handleVideoPlay = () => videoBtn.classList.add("playing");
      const handleVideoPause = () => videoBtn.classList.remove("playing");
      const handleVideoEnd = () => {
        videoBtn.classList.remove("playing");
        video.currentTime = 0;
      };

      videoBtn.addEventListener("click", handleVideoToggle);
      video.addEventListener("play", handleVideoPlay);
      video.addEventListener("pause", handleVideoPause);
      video.addEventListener("ended", handleVideoEnd);

      cleanupHandlers.push(() =>
        videoBtn.removeEventListener("click", handleVideoToggle)
      );
      cleanupHandlers.push(() => video.removeEventListener("play", handleVideoPlay));
      cleanupHandlers.push(() => video.removeEventListener("pause", handleVideoPause));
      cleanupHandlers.push(() => video.removeEventListener("ended", handleVideoEnd));

      if ("IntersectionObserver" in window) {
        videoObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                if (window.innerWidth >= 768) {
                  video.play().catch(() => undefined);
                }
              } else if (!entry.isIntersecting && !video.paused) {
                video.pause();
              }
            });
          },
          { threshold: [0.5] }
        );

        if (video.parentElement) {
          videoObserver.observe(video.parentElement);
        }
      }
    }

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      const handleAnchorClick = (event: MouseEvent) => {
        const target = document.querySelector<HTMLElement>(
          anchor.getAttribute("href") || ""
        );
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };

      anchor.addEventListener("click", handleAnchorClick);
      cleanupHandlers.push(() =>
        anchor.removeEventListener("click", handleAnchorClick)
      );
    });

    const nav = document.querySelector<HTMLElement>(".nav");
    if (nav) {
      const handleScroll = () => {
        if (window.pageYOffset > 100) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      cleanupHandlers.push(() =>
        window.removeEventListener("scroll", handleScroll)
      );
    }

    let animateObserver: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      const animateOnScroll = document.querySelectorAll<HTMLElement>(
        ".service-card, .case-card, .how-step, .testimonial-card, .service-card-lg"
      );

      animateObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.style.opacity = "1";
              target.style.transform = "translateY(0)";
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      animateOnScroll.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        animateObserver?.observe(el);
      });
    }

    return () => {
      cleanupHandlers.forEach((cleanup) => cleanup());
      videoObserver?.disconnect();
      animateObserver?.disconnect();
    };
  }, []);

  return <HomePage />;
};

export default HomePageClient;
