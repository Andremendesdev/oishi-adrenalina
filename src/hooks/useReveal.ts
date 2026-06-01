import { useEffect } from "react";

const REVEAL_SELECTOR = ".reveal:not(.is-visible)";

function collectRevealElements(root: ParentNode): HTMLElement[] {
  const found: HTMLElement[] = [];

  if (root instanceof HTMLElement && root.matches(REVEAL_SELECTOR)) {
    found.push(root);
  }

  if (root instanceof Element || root instanceof Document || root instanceof DocumentFragment) {
    root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
      found.push(el);
    });
  }

  return found;
}

/** Reveal-on-scroll for any element with the `.reveal` class, including async content. */
export const useReveal = () => {
  useEffect(() => {
    const observed = new WeakSet<HTMLElement>();

    const markVisible = (el: HTMLElement) => {
      el.classList.add("is-visible");
    };

    const observeElement = (el: HTMLElement, io: IntersectionObserver) => {
      if (observed.has(el) || el.classList.contains("is-visible")) return;
      observed.add(el);
      io.observe(el);
    };

    const observeRevealElements = (
      root: ParentNode,
      io: IntersectionObserver,
    ) => {
      collectRevealElements(root).forEach((el) => observeElement(el, io));
    };

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach(markVisible);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markVisible(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observeRevealElements(document, io);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeRevealElements(node, io);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
