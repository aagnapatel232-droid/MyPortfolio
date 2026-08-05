* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --bg: #060711;
    --bg2: #0a0b16;
    --card: #0e1020;
    --card2: #111327;

    --purple: #8b5cf6;
    --purple-light: #a78bfa;
    --purple-dark: #6d28d9;

    --white: #f5f5f7;
    --text: #c4c5d0;
    --muted: #77798a;

    --border: rgba(255, 255, 255, 0.08);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background:
        radial-gradient(
            circle at 75% 15%,
            rgba(124, 58, 237, 0.12),
            transparent 25%
        ),
        var(--bg);

    color: var(--white);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

button {
    font-family: inherit;
}


/* =========================
   NAVBAR
========================= */

.navbar {
    height: 72px;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 7%;

    background: rgba(6, 7, 17, 0.82);
    backdrop-filter: blur(15px);

    border-bottom: 1px solid var(--border);

    z-index: 1000;
}

.logo {
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -1px;
}

.logo span {
    color: var(--purple-light);
}

.navbar nav {
    display: flex;
    gap: 30px;
}

.navbar nav a {
    color: var(--text);
    font-size: 13px;
    transition: 0.3s;
}

.navbar nav a:hover {
    color: var(--purple-light);
}

.menu-btn {
    display: none;

    background: transparent;
    border: none;

    color: white;
    font-size: 24px;

    cursor: pointer;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;

    max-width: 1250px;

    margin: auto;

    padding: 130px 7% 80px;

    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 70px;
}

.hero-text {
    max-width: 650px;
}

.intro {
    color: var(--purple-light);

    font-size: 12px;
    font-weight: 700;

    letter-spacing: 4px;

    margin-bottom: 12px;
}

.hero h1 {
    font-size: clamp(60px, 8vw, 105px);

    line-height: 0.95;

    letter-spacing: -5px;

    margin-bottom: 22px;
}

.hero h1 span {
    color: var(--purple);
}

.hero h2 {
    font-size: clamp(21px, 3vw, 31px);

    font-weight: 600;

    margin-bottom: 18px;
}

.hero-description {
    max-width: 550px;

    color: var(--text);

    font-size: 16px;

    margin-bottom: 32px;
}

.hero-buttons {
    display: flex;
    gap: 14px;

    flex-wrap: wrap;
}

.btn {
    padding: 12px 22px;

    border-radius: 8px;

    font-size: 13px;
    font-weight: 600;

    transition: 0.3s;
}

.primary {
    background: var(--purple);

    color: white;

    box-shadow:
        0 10px 35px rgba(139, 92, 246, 0.25);
}

.primary:hover {
    background: var(--purple-light);

    transform: translateY(-3px);
}

.secondary {
    border: 1px solid var(--border);

    color: var(--white);

    background: rgba(255,255,255,0.02);
}

.secondary:hover {
    border-color: var(--purple);

    color: var(--purple-light);

    transform: translateY(-3px);
}


/* =========================
   PHOTO
========================= */

.hero-photo {
    position: relative;

    width: 360px;
    height: 360px;

    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-photo::before {
    content: "";

    position: absolute;

    width: 365px;
    height: 365px;

    border-radius: 50%;

    border: 1px solid rgba(139, 92, 246, 0.5);

    box-shadow:
        0 0 50px rgba(139, 92, 246, 0.18),
        0 0 100px rgba(109, 40, 217, 0.12);

    animation: pulse 4s infinite ease-in-out;
}

.hero-photo img {
    width: 320px;
    height: 320px;

    object-fit: cover;

    border-radius: 50%;

    position: relative;

    z-index: 2;

    box-shadow:
        0 0 35px rgba(139, 92, 246, 0.35);

    transition: 0.4s;
}

.hero-photo img:hover {
    transform: scale(1.03);
}

.glow {
    position: absolute;

    width: 260px;
    height: 260px;

    background: var(--purple);

    filter: blur(110px);

    opacity: 0.14;
}

@keyframes pulse {

    0%, 100% {
        transform: scale(1);
        opacity: 0.7;
    }

    50% {
        transform: scale(1.04);
        opacity: 1;
    }
}


/* =========================
   SECTIONS
========================= */

.section {
    max-width: 1150px;

    margin: auto;

    padding: 110px 7%;
}

.section-heading {
    display: flex;

    align-items: center;

    gap: 15px;

    margin-bottom: 45px;
}

.section-heading span {
    color: var(--purple);

    font-size: 13px;

    font-weight: 700;
}

.section-heading h2 {
    font-size: 35px;

    letter-spacing: -1px;
}

.section-intro {
    color: var(--text);

    margin-top: -25px;

    margin-bottom: 35px;
}


/* =========================
   ABOUT
========================= */

.about-content {
    display: grid;

    grid-template-columns: 1.3fr 0.7fr;

    gap: 70px;
}

.about-text p {
    color: var(--text);

    font-size: 16px;

    margin-bottom: 20px;
}

.about-text strong {
    color: var(--purple-light);
}

.quick-info {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 18px;
}

.quick-info div {
    background: var(--card);

    border: 1px solid var(--border);

    padding: 20px;

    border-radius: 10px;
}

.quick-info span {
    display: block;

    color: var(--muted);

    font-size: 11px;

    margin-bottom: 5px;
}

.quick-info strong {
    font-size: 13px;
}


/* =========================
   SKILLS
========================= */

.skills-section {
    max-width: none;

    background: var(--bg2);

    padding-left: 7%;
    padding-right: 7%;
}

.skills-grid {
    max-width: 1150px;

    margin: auto;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 16px;
}

.skill-card {
    background: var(--card);

    border: 1px solid var(--border);

    padding: 25px;

    border-radius: 12px;

    transition: 0.3s;
}

.skill-card:hover {
    transform: translateY(-5px);

    border-color: rgba(139, 92, 246, 0.4);

    background: var(--card2);
}

.skill-icon {
    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(139, 92, 246, 0.13);

    color: var(--purple-light);

    border-radius: 9px;

    font-weight: 800;

    margin-bottom: 18px;
}

.skill-card h3 {
    font-size: 16px;

    margin-bottom: 5px;
}

.skill-card p {
    color: var(--muted);

    font-size: 12px;
}


/* =========================
   PROJECTS
========================= */

.projects-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 18px;
}

.project-card {
    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 14px;

    padding: 30px;

    transition: 0.35s;
}

.project-card:hover {
    transform: translateY(-7px);

    border-color: rgba(139, 92, 246, 0.45);

    box-shadow:
        0 20px 60px rgba(0,0,0,0.25);
}

.project-card.featured {
    border-color: rgba(139, 92, 246, 0.3);
}

.project-top {
    display: flex;

    justify-content: space-between;

    align-items: center;

    margin-bottom: 25px;
}

.project-number {
    color: var(--purple-light);

    font-weight: 700;

    font-size: 13px;
}

.project-type {
    color: var(--purple-light);

    background: rgba(139, 92, 246, 0.1);

    padding: 5px 9px;

    border-radius: 5px;

    font-size: 10px;
}

.project-type.ongoing {
    color: #f5c76b;

    background: rgba(245, 199, 107, 0.1);
}

.project-card h3 {
    font-size: 22px;

    margin-bottom: 14px;
}

.project-card p {
    color: var(--text);

    font-size: 13px;

    margin-bottom: 22px;
}

.tags {
    display: flex;

    gap: 7px;

    flex-wrap: wrap;
}

.tags span {
    color: var(--muted);

    border: 1px solid var(--border);

    padding: 5px 9px;

    border-radius: 5px;

    font-size: 10px;
}

.workflow {
    display: flex;

    flex-wrap: wrap;

    align-items: center;

    gap: 5px;

    color: var(--purple-light);

    font-size: 10px;

    margin-bottom: 20px;
}

.workflow b {
    color: var(--muted);
}


/* =========================
   EDUCATION
========================= */

.education-section {
    background: var(--bg2);

    max-width: none;

    padding-left: 7%;
    padding-right: 7%;
}

.education-card {
    max-width: 1150px;

    margin: auto;

    display: flex;

    justify-content: space-between;

    gap: 50px;

    background: var(--card);

    border: 1px solid var(--border);

    border-radius: 14px;

    padding: 35px;
}

.education-label {
    color: var(--purple-light);

    font-size: 10px;

    letter-spacing: 2px;

    margin-bottom: 8px;
}

.education-main h3 {
    font-size: 24px;

    margin-bottom: 5px;
}

.education-main h4 {
    color: var(--text);

    font-size: 15px;

    font-weight: 500;

    margin-bottom: 12px;
}

.education-main > p:last-child {
    color: var(--muted);

    font-size: 13px;
}

.academic {
    min-width: 400px;
}

.academic > p {
    color: var(--muted);

    font-size: 12px;

    margin-bottom: 12px;
}

.grades {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;
}

.grade {
    background: var(--card2);

    border: 1px solid var(--border);

    border-radius: 9px;

    padding: 18px;

    text-align: center;
}

.grade span {
    display: block;

    color: var(--muted);

    font-size: 11px;

    margin-bottom: 5px;
}

.grade strong {
    color: var(--purple-light);

    font-size: 27px;
}

.grade small {
    color: var(--muted);

    font-size: 11px;
}


/* =========================
   INTEREST
========================= */

.interest-section {
    max-width: 1150px;

    margin: 110px auto;

    padding: 45px;

    border-radius: 16px;

    border: 1px solid rgba(139, 92, 246, 0.25);

    background:
        linear-gradient(
            110deg,
            rgba(109, 40, 217, 0.13),
            rgba(15, 16, 35, 0.6)
        );

    display: flex;

    align-items: center;

    justify-content: space-between;
}

.interest-section span {
    color: var(--purple-light);

    font-size: 10px;

    letter-spacing: 2px;
}

.interest-section h2 {
    font-size: 30px;

    margin: 8px 0;
}

.interest-section p {
    color: var(--text);

    max-width: 600px;

    font-size: 13px;
}

.interest-symbol {
    color: var(--purple);

    font-size: 80px;

    font-weight: 800;

    opacity: 0.5;
}


/* =========================
   CONTACT
========================= */

.contact-content {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 60px;
}

.contact-content h3 {
    font-size: 26px;

    margin-bottom: 10px;
}

.contact-content p {
    color: var(--text);

    font-size: 14px;
}

.contact-links {
    display: flex;

    flex-direction: column;

    gap: 15px;
}

.contact-links a {
    display: flex;

    align-items: center;

    gap: 15px;

    padding: 17px;

    border: 1px solid var(--border);

    border-radius: 9px;

    background: var(--card);

    color: var(--text);

    transition: 0.3s;
}

.contact-links a:hover {
    border-color: var(--purple);

    color: var(--purple-light);

    transform: translateX(5px);
}

.contact-links span {
    color: var(--purple-light);

    font-size: 18px;
}


/* =========================
   FOOTER
========================= */

footer {
    border-top: 1px solid var(--border);

    padding: 25px 7%;

    display: flex;

    justify-content: space-between;

    color: var(--muted);

    font-size: 11px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 950px) {

    .hero {
        flex-direction: column-reverse;

        text-align: center;

        padding-top: 120px;
    }

    .hero-description {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .about-content {
        grid-template-columns: 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .education-card {
        flex-direction: column;
    }

    .academic {
        min-width: 0;
    }

    .contact-content {
        grid-template-columns: 1fr;
    }
}


@media (max-width: 650px) {

    .navbar {
        padding: 0 5%;
    }

    .navbar nav {
        display: none;

        position: absolute;

        top: 72px;

        left: 0;

        width: 100%;

        padding: 25px;

        background: #090a14;

        flex-direction: column;

        align-items: center;

        gap: 20px;

        border-bottom: 1px solid var(--border);
    }

    .navbar nav.active {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .hero {
        padding-left: 5%;
        padding-right: 5%;
    }

    .hero-photo {
        width: 290px;
        height: 290px;
    }

    .hero-photo::before {
        width: 295px;
        height: 295px;
    }

    .hero-photo img {
        width: 260px;
        height: 260px;
    }

    .hero h1 {
        font-size: 65px;
    }

    .section {
        padding-left: 5%;
        padding-right: 5%;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .quick-info {
        grid-template-columns: 1fr;
    }

    .grades {
        grid-template-columns: 1fr;
    }

    .interest-section {
        margin: 70px 5%;

        padding: 30px;

        flex-direction: column;

        align-items: flex-start;

        gap: 20px;
    }

    .interest-symbol {
        display: none;
    }

    footer {
        flex-direction: column;

        gap: 8px;

        text-align: center;
    }
}