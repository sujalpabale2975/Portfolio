// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

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
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .article-card, .cert-item').forEach(el => {
    observer.observe(el);
});

// Typing Effect for Hero
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
}

// Scroll Progress Bar
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

const progressStyle = document.createElement('style');
progressStyle.textContent = '.scroll-progress { position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #FF0B55, #FFA500); z-index: 9999; transition: width 0.2s ease; }';
document.head.appendChild(progressStyle);

// Particle Effect
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = e.clientX + 'px';
        particle.style.top = e.clientY + 'px';
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
});

const particleStyle = document.createElement('style');
particleStyle.textContent = '.particle { position: fixed; width: 4px; height: 4px; background: #FF0B55; border-radius: 50%; pointer-events: none; animation: particleFade 1s ease-out forwards; z-index: 9998; } @keyframes particleFade { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0) translateY(-50px); } }';
document.head.appendChild(particleStyle);

// Button Ripple Effect
document.querySelectorAll('.btn, .cta-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = '.btn, .cta-btn { position: relative; overflow: hidden; } .ripple { position: absolute; border-radius: 50%; background: rgba(255, 255, 255, 0.6); transform: scale(0); animation: rippleEffect 0.6s ease-out; pointer-events: none; } @keyframes rippleEffect { to { transform: scale(4); opacity: 0; } }';
document.head.appendChild(rippleStyle);

// ARTICLE DATA WITH FULL CONTENT
const articleData = {
    'hashing-cybersecurity': {
        title: 'The Importance of Hashing in Cybersecurity and Password Protection',
        content: '<h3>Introduction</h3><p>In today\'s digital age, protecting user data has become a top priority for organizations and individuals alike. One of the most common security concerns is the protection of passwords and sensitive information. This is where hashing plays a critical role. Hashing is a fundamental concept in cryptography that ensures data security without actually storing the original information. It is widely used in cybersecurity to safeguard passwords, maintain data integrity, and secure systems.</p><h3>What is Hashing?</h3><p>Hashing is a process that converts input data (such as a password or file) into a fixed-length string known as a hash value or digest. This process is carried out using a mathematical function called a hash function.</p><p><strong>Key properties of hashing:</strong></p><ul><li>It is one-way (cannot be reversed easily)</li><li>It produces a fixed-length output</li><li>Even a small change in input results in a completely different hash</li></ul><p>For example, a password like "secure123" will be converted into a unique hash value, making it difficult for attackers to retrieve the original password.</p><h3>Why Hashing is Important in Cybersecurity</h3><h4>1. Password Protection</h4><p>Instead of storing actual passwords, systems store their hash values. When a user logs in, the entered password is hashed and compared with the stored hash.</p><h4>2. Data Integrity</h4><p>Hashing ensures that data has not been altered. If even one bit changes, the hash value changes completely, making it easy to detect tampering.</p><h4>3. Fast Processing</h4><p>Hash functions are designed to be efficient, allowing quick verification of large amounts of data.</p><h3>Common Hashing Algorithms</h3><h4>1. MD5 (Message Digest Algorithm 5)</h4><ul><li>Produces a 128-bit hash</li><li>Fast but considered insecure today due to vulnerabilities</li></ul><h4>2. SHA (Secure Hash Algorithm)</h4><ul><li>Includes SHA-1, SHA-256, SHA-512</li><li>SHA-256 is widely used and more secure</li></ul><h4>3. bcrypt</h4><ul><li>Specifically designed for password hashing</li><li>Adds security through salting and slow processing</li></ul><h3>Hashing vs Encryption</h3><p>Many people confuse hashing with encryption, but they are different:</p><ul><li><strong>Hashing:</strong> One-way process, cannot be reversed</li><li><strong>Encryption:</strong> Two-way process, data can be decrypted using a key</li></ul><p>Hashing is mainly used for verification, while encryption is used for secure communication.</p><h3>Real-World Applications of Hashing</h3><h4>1. Login Systems</h4><p>Websites use hashing to store user passwords securely.</p><h4>2. File Verification</h4><p>Downloaded files often include hash values to verify integrity.</p><h4>3. Blockchain Technology</h4><p>Hashing ensures data immutability and security in blockchain systems.</p><h4>4. Digital Signatures</h4><p>Hashing is used along with encryption to create secure digital signatures.</p><h3>Security Risks and Solutions</h3><p><strong>Risks:</strong></p><ul><li>Brute-force attacks</li><li>Rainbow table attacks</li><li>Weak hash algorithms (like MD5)</li></ul><p><strong>Solutions:</strong></p><ul><li>Use strong algorithms like SHA-256 or bcrypt</li><li>Add salting (random data added before hashing)</li><li>Use peppering (extra secret value)</li></ul><h3>Future of Hashing</h3><p>As cyber threats evolve, hashing techniques are also improving. New algorithms and security practices are being developed to make systems more secure. Combining hashing with advanced techniques like salting and multi-factor authentication enhances overall protection.</p><h3>Conclusion</h3><p>Hashing is a vital component of cybersecurity and plays a key role in protecting passwords and ensuring data integrity. It provides a secure way to handle sensitive information without exposing it. As digital systems continue to grow, the importance of hashing will only increase, making it an essential concept for anyone studying cryptography and network security.</p><p><strong>Author:</strong> Sujal Pabale<br><strong>Platform:</strong> LinkedIn / Portfolio</p>'
    }
};

// Initialize Article Modal
function initArticleModal() {
    const modalHTML = '<div id="articleModal" class="article-modal"><div class="article-modal-content"><span class="article-modal-close">&times;</span><h2 id="articleModalTitle"></h2><div id="articleModalBody" class="article-modal-body"></div></div></div>';
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    const modal = document.getElementById('articleModal');
    const modalTitle = document.getElementById('articleModalTitle');
    const modalBody = document.getElementById('articleModalBody');
    const closeBtn = document.querySelector('.article-modal-close');
    
    document.querySelectorAll('.article-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const articleId = this.getAttribute('data-article');
            const article = articleData[articleId];
            
            if (article) {
                modalTitle.textContent = article.title;
                modalBody.innerHTML = article.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArticleModal);
} else {
    initArticleModal();
}

// ===================================
// Video Cards Click Handler
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
            window.open(youtubeUrl, '_blank');
        });
    });
});
