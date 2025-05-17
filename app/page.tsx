export default function Home() {
  return (
    <main className="prose dark:prose-invert prose-lg max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 selection:bg-blue-500 selection:text-white">
      <div className="mb-12 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          JUST FUCKING USE DOCKER
        </h1>
        <p className="mt-3 text-base sm:text-lg font-medium text-slate-600 dark:text-slate-400">
          (OR PODMAN, OR WHATEVER—JUST STOP SETTING YOUR SERVERS ON FIRE)
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-3 mb-6">
          SO, WHAT THE FUCK IS THIS ABOUT?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Look, I get it. You're the artisan sysadmin, the digital blacksmith, lovingly handcrafting each server like a fucking bespoke latte. You SSH into every goddamn machine, `nano` your way through config files you barely understand, run update scripts you copied from a Stack Overflow answer from 2012, and call it "keeping it simple" or "having control." Adorable. And catastrophically inefficient.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-3 mb-6">
          WHY THE FUCK WOULD I STOP USING MY PRECIOUS, SELF-MADE BASH SCRIPTS?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Because deploying software shouldn’t feel like defusing a nuclear bomb with rusty pliers every Friday at 5 PM while your boss is breathing down your neck. Docker (and its brethren) means predictable environments, dependency sanity, actual consistency between dev, staging, and prod, and a fighting chance of not hating your job. It's about professionalism, not just duct tape and prayers.
        </p>
      </section>

      <section className="mt-12">
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-3">
            REPEATABLE ENVIRONMENTS, YOU MANUAL DEPLOYMENT MASOCHIST!
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            "But it works on my machine!" – the battle cry of the clueless. Docker gives you a repeatable, predictable environment. Define it once in a Dockerfile, build an image, and that image runs *identically* everywhere. Your laptop, your colleague's machine, the CI server, staging, production. Everywhere. No more fucking surprises.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-3">
            DEPENDENCY HELL? MORE LIKE DEPENDENCY HEAVEN, YOU CLUELESS BUFFOON!
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Remember that time you updated OpenSSL for one app and suddenly three other critical services shit the bed? Or when you spent half a day trying to get the *exact* right version of Python, lib-this, and package-that installed, only for it to conflict with something else? Docker locks your app and ALL its fucking dependencies – down to the tiniest library – into a neat, isolated package. Exactly what it needs. No more global system-wide installs that turn your server into a minefield.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-3">
            CONSISTENT DEPLOYMENTS, YOU ERROR-PRONE COWBOY!
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Dev, staging, prod—they all become identical fucking twins, or at least very, very similar siblings. Stop gambling with your deployments. Stop praying that this time, *this time*, the ancient incantations you chant over the production server will actually work. What you test is what you deploy. Simple as that.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-3">
            SCALABILITY WITHOUT THE BRAIN ANEURYSM!
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Need to handle more traffic? With containers, scaling out often means just spinning up more identical instances of your application container. No need to manually configure a whole new server from scratch, install all dependencies, and then cross your fingers. Orchestration tools like Kubernetes (which loves Docker) make this even more magical, but even standalone Docker makes scaling less of a goddamn nightmare.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-3">
            FASTER ONBOARDING & BETTER TEAM COLLABORATION, YOU LONE WOLF!
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            New developer joins the team? Instead of handing them a 20-page PDF titled "How to Set Up Your Dev Environment (Good Luck!)", you give them a Dockerfile or a `docker-compose.yml`. They run one or two commands, and their entire development environment is up and running, identical to everyone else's. Hours, if not days, of setup bullshit, GONE. Everyone works with the same base, reducing "it works on my machine" friction.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-3">
            EXISTING INFRASTRUCTURE NIGHTMARES? MORE LIKE "DOCKER PS -A" AND CHILL!
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Ever inherited a server where nobody *really* knows what's running, why it's running, or what happens if you breathe on it wrong? You spend days `grep`-ing through `/etc`, `find`-ing random binaries in `/opt`, and deciphering cron jobs written by a sysadmin who quit five years ago. It's archaeological guesswork on a live system. With Docker, you type `docker ps -a`. Boom. There's a list of what's actually fucking running, what ports it's using, and when it was started. It's not a silver bullet for legacy chaos, but it sure as hell brings a flashlight to the dungeon.
          </p>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 mb-3">
            RESOURCE ISOLATION—NO MORE APP VAMPIRES SUCKING YOUR SERVER DRY!
          </h3>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Containers isolate resources (CPU, memory, network I/O, filesystem). That means one misbehaving, memory-leaking, CPU-hogging application can't easily suck the life out of your entire server and bring everything else crashing down like a house of cards in a hurricane. Each container gets its allocated slice, keeping things (relatively) civilized.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-3 mb-6">
          "BUT IT'S ANOTHER THING TO LEARN! MY BRAIN IS FULL!"
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Oh, boo fucking hoo. Yes, there's a learning curve. It's not black magic, but it's not finger painting either. But consider the alternative: continuing to wrestle with inconsistent environments, dependency hell, and deployments that age you a decade each time. The time you invest in learning Docker will pay itself back tenfold in reduced stress, faster deployments, and fewer "oh shit" moments at 3 AM. Stop being a Luddite.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-3 mb-6">
          BUT WHAT ABOUT THE OVERHEAD? ISN'T IT SLOWER?
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          For fuck's sake. This old chestnut. Good abstractions aren’t free, but Docker’s overhead on Linux is generally negligible for most applications. It uses kernel features for isolation, not full hardware virtualization like a traditional VM. The performance difference is often too small to measure compared to the monumental gains in sanity, reliability, and speed of development. Are you really counting CPU cycles while your hair is on fire during a manual deployment disaster that's costing your company thousands per minute? Get some perspective.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-3 mb-6">
          WHEN SHOULD I JUST FUCKING USE DOCKER?
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <li>You want predictable, repeatable deployments that don't make you want to sacrifice a goat to the server gods.</li>
          <li>You're tired of managing dependencies and version conflicts like it's a goddamn Sudoku puzzle designed by Satan.</li>
          <li>You need multiple consistent environments (dev/staging/prod/Joe's weird experiment) that actually mirror each other.</li>
          <li>You dream of horizontal scaling by just typing `docker-compose up --scale app=10` instead of provisioning six new servers by hand.</li>
          <li>Your team needs a structured way to collaborate without everyone's local setup being a unique, terrifying snowflake.</li>
          <li>You want to recover from failures quickly by just restarting a container, instead of rebuilding servers from ancient backups and forgotten notes.</li>
          <li>You're building microservices (if you're not, maybe you should be, but that's another rant). Docker is practically made for this shit.</li>
          <li>You've inherited a server that's a black box of mystery and despair, and you just want to know what the fuck is running.</li>
          <li>You simply want to sleep at night.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-3 mb-6">
          THE REAL PROBLEM ISN'T DOCKER—IT'S PROBABLY YOU AND YOUR FEAR OF CHANGE.
        </h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          Let's be brutally honest. Developers or sysadmins misusing, misunderstanding, or stubbornly ignoring tools like Docker because "it's too complex" or "the old way works fine" are often the bottleneck—not the tool itself. The "old way" is why you're drowning in technical debt and your deployments are a weekly horror show. Docker, Podman, and containerization in general solve real, painful, expensive problems. It's time to pull your head out of the sand and embrace it.
        </p>
        <p className="mt-8 font-bold text-xl sm:text-2xl text-center text-blue-600 dark:text-blue-400">
          SO, FOR THE LOVE OF ALL THAT IS HOLY AND STABLE, JUST FUCKING USE DOCKER.
        </p>
        <p className="mt-4 text-center text-slate-600 dark:text-slate-400">
          Seriously. Your future self will thank you. Your therapist will thank you. Your cat might even notice you're less stressed.
        </p>
      </section>

      <footer className="mt-16 pt-8 border-t border-slate-300 dark:border-slate-700 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Now stop romanticizing manual deployment and your tangled mess of shell scripts that only you (barely) understand.
          <br />
          Build something stable, scalable, and maintainable—like an actual fucking professional who values their time and sanity.
          <br />
          <a href="https://docs.docker.com/get-started/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Go on, get started. You know you want to.</a>
        </p>
      </footer>
    </main>



  );
}
