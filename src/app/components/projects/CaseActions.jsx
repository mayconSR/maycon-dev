"use client";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import { trackEvent } from "../../lib/ga";

export default function CaseActions({ title, links = {} }) {
  function click(type) {
    trackEvent("project_case_click", {
      project_title: title,
      destination: type, // "live" | "repo"
    });
  }

  return (
    <div className="mt-5 flex gap-2">
      {links.live && links.live !== "#" && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => click("live")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white hover:opacity-90"
        >
          Live <FiExternalLink aria-hidden />
        </a>
      )}
      {links.repo && (
        <a
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => click("repo")}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 dark:border-white/10"
        >
          Repo <FiGithub aria-hidden />
        </a>
      )}
    </div>
  );
}
