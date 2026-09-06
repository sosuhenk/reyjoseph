export const social = [
  { url: "mailto:me@rayjoseph.com", name: "mail" },
  { url: "https://github.com/sosuhenk", name: "github" },
  { url: "www.linkedin.com/in/made-ray-joseph-hendrawan", name: "linkedin" },
  { url: "https://x.com/RZWC496340", name: "x" },

] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
