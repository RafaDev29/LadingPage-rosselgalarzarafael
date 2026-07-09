import { Mail } from "lucide-react";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/lib/profile";

/**
 * Cierre + contacto — Server Component.
 */
export function Footer() {
  return (
    <footer id="contacto" className="border-t border-starlight/5">
      {/* pb extra en móvil: deja respirar al dock de navegación inferior */}
      <div className="mx-auto max-w-6xl px-6 pb-36 pt-24 md:py-24">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-stellar-bright">
            transmisión abierta · ¿construimos algo juntos?
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 text-2xl font-semibold tracking-tight text-starlight transition-colors hover:text-nebula-bright sm:text-3xl"
          >
            <Mail className="size-6 text-nebula-bright" />
            {profile.email}
          </a>

          <div className="flex items-center gap-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-stardust transition-colors hover:text-nebula-bright"
            >
              <GithubIcon className="size-4" />
              @{profile.githubUser}
            </a>
            <a
              href={profile.links.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-stardust transition-colors hover:text-stellar-bright"
            >
              <GitlabIcon className="size-4" />
              GitLab
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-stardust transition-colors hover:text-comet"
            >
              <LinkedinIcon className="size-4" />
              /in/rosseldev
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-starlight/5 pt-8 font-mono text-xs text-stardust sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            navegando el espacio-tiempo con <span className="text-nebula-bright">Next.js</span>{" "}
            <span aria-hidden>· ᓚᘏᗢ</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
