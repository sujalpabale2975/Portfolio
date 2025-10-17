
# Create JavaScript with animations
js_content = '''// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('.about-text, .skill-box, .project-card, .article-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.8s ease';
    observer.observe(el);
});

// Skill Progress Bars
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.skill-box').forEach(box => {
                box.classList.add('animated');
            });
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Parallax effect for shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.bg-shapes .shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.05;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

function highlightNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary)';
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Stagger animation for skills
const skillBoxes = document.querySelectorAll('.skill-box');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

skillBoxes.forEach(box => {
    box.style.opacity = '0';
    box.style.transform = 'translateY(50px)';
    box.style.transition = 'all 0.6s ease';
    skillObserver.observe(box);
});

// Animate numbers (for future stats)
function animateNumber(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.left = e.clientX - this.offsetLeft - 50 + 'px';
        ripple.style.top = e.clientY - this.offsetTop - 50 + 'px';
        ripple.style.animation = 'ripple-effect 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add keyframes for ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-effect {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Console message
console.log('%c🔥 Welcome to Sujal Pabale\'s Portfolio!', 'color: #FF0B55; font-size: 24px; font-weight: bold;');
console.log('%c💻 Cybersecurity Enthusiast | CTF Player', 'color: #CF0F47; font-size: 16px;');
console.log('%c📧 sujal.18186@sakec.ac.in', 'color: #fff; font-size: 14px;');

// Particle effect on mouse move
let particles = [];

document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        createParticle(e.clientX, e.clientY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.background = '#FF0B55';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'particle-fade 1s ease-out forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particle-fade {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effect to floating cards
document.querySelectorAll('.visual-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});

// Random shape movement
setInterval(() => {
    document.querySelectorAll('.bg-shapes .shape').forEach(shape => {
        const randomX = Math.random() * 20 - 10;
        const randomY = Math.random() * 20 - 10;
        shape.style.transform += ` translate(${randomX}px, ${randomY}px)`;
    });
}, 3000);

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 5px;
    background: linear-gradient(90deg, #FF0B55, #CF0F47);
    z-index: 10000;
    transition: width 0.1s ease;
    box-shadow: 0 0 20px rgba(255, 11, 85, 0.8);
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);'''

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("✅ JavaScript with rich animations created!")
print("\n" + "="*80)
print("🎨 VIBRANT HIGH-CONTRAST PORTFOLIO READY!")
print("="*80)
print("\n✨ DESIGN FEATURES:")
print("   ✓ Original color scheme: #FF0B55, #CF0F47, #000000")
print("   ✓ HIGH CONTRAST black and bright pink/red")
print("   ✓ Animated background shapes (floating, morphing, rotating)")
print("   ✓ Gradient buttons and cards")
print("   ✓ Pulsing effects and animations")
print("   ✓ Floating cards in hero section")
print("   ✓ Circular progress indicators")
print("   ✓ Animated skill progress bars")
print("   ✓ Hover effects with glow and scale")
print("   ✓ Scroll-triggered animations")
print("   ✓ Particle effects on mouse move")
print("   ✓ Scroll progress bar")
print("   ✓ Ripple button effects")
print("   ✓ Staggered card reveals")
print("\n🎯 SHAPES & ICONS:")
print("   ✓ Circular shapes")
print("   ✓ Morphing blobs")
print("   ✓ Rotating squares")
print("   ✓ Pulsing rings")
print("   ✓ Icon-based cards")
print("   ✓ Large section icons")
print("\n🚀 This is bold, vibrant, and professional!")
print("="*80)
