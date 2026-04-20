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
    },
    'ai-cybersecurity': {
        title: 'The Role of Artificial Intelligence in Cybersecurity',
        content: '<h3>Introduction</h3><p>In today\'s digital age, cyber threats are becoming more advanced and frequent. From phishing attacks to ransomware, organizations and individuals face serious security risks. Traditional cybersecurity methods are no longer enough to handle these modern threats. This is where Artificial Intelligence (AI) plays an important role.</p><p>AI helps improve cybersecurity by detecting threats faster, analyzing large amounts of data, and responding automatically to attacks. It allows systems to learn patterns and identify unusual activities. This makes cybersecurity systems smarter and more efficient.</p><h3>What is AI in Cybersecurity?</h3><p>Artificial Intelligence in cybersecurity refers to the use of machine learning and intelligent algorithms to protect systems, networks, and data from cyber threats.</p><p><strong>Key features of AI in cybersecurity:</strong></p><ul><li>It can learn from data and improve over time</li><li>It detects unusual patterns and behaviors</li><li>It works in real time</li><li>It reduces human effort</li></ul><p>For example, AI can detect suspicious login attempts or unusual network traffic instantly.</p><h3>Why AI is Important in Cybersecurity</h3><h4>1. Faster Threat Detection</h4><p>AI can analyze large amounts of data quickly and detect threats in real time.</p><h4>2. Improved Accuracy</h4><p>It reduces human errors and minimizes false alarms.</p><h4>3. Automation</h4><p>AI automates tasks like monitoring, detection, and response.</p><h4>4. Adaptability</h4><p>AI systems continuously learn and adapt to new threats.</p><h3>Applications of AI in Cybersecurity</h3><h4>1. Threat Detection and Prevention</h4><p>AI monitors network activity and identifies suspicious behavior such as unusual logins or data transfers.</p><h4>2. Malware Detection</h4><p>AI detects malware based on behavior rather than relying only on known signatures.</p><h4>3. Phishing Detection</h4><p>AI analyzes emails and links to detect phishing attacks and protect users.</p><h4>4. Intrusion Detection Systems (IDS)</h4><p>AI-based IDS detect unauthorized access and alert administrators in real time.</p><h4>5. Automated Incident Response</h4><p>AI can automatically block threats, isolate systems, and send alerts.</p><h4>6. User Behavior Analytics</h4><p>AI tracks user activity and identifies abnormal behavior to detect insider threats.</p><h4>7. Fraud Detection</h4><p>AI is used in banking systems to detect unusual transactions and prevent fraud.</p><h3>Common AI Technologies Used</h3><h4>1. Machine Learning (ML)</h4><p>Allows systems to learn from data and improve detection accuracy.</p><h4>2. Deep Learning</h4><p>Helps analyze complex patterns in large datasets.</p><h4>3. Behavioral Analytics</h4><p>Tracks user and system behavior to identify anomalies.</p><h3>AI vs Traditional Cybersecurity</h3><p>Many people compare AI with traditional security methods:</p><ul><li><strong>Traditional Security:</strong> Rule-based, slower, less flexible</li><li><strong>AI-Based Security:</strong> Adaptive, faster, and more intelligent</li></ul><p>AI enhances traditional systems by making them more proactive instead of reactive.</p><h3>Real-World Applications</h3><p>Many companies use AI in cybersecurity:</p><ul><li>IBM uses AI for threat detection and analysis</li><li>Google uses AI to detect phishing and malware</li><li>Microsoft integrates AI into cloud security systems</li></ul><p>These companies use AI to improve security and protect user data.</p><h3>Security Risks and Challenges</h3><p><strong>Risks:</strong></p><ul><li>High implementation cost</li><li>Requires large amounts of data</li><li>AI-based cyberattacks by hackers</li><li>Possible false positives</li></ul><p><strong>Solutions:</strong></p><ul><li>Use high-quality training data</li><li>Combine AI with human monitoring</li><li>Regularly update AI systems</li><li>Use strong security policies</li></ul><h3>Future of AI in Cybersecurity</h3><p>AI will continue to play a major role in cybersecurity. Future systems may become fully automated and capable of predicting attacks before they happen.</p><p>Upcoming trends include:</p><ul><li>AI-driven security systems</li><li>Predictive threat analysis</li><li>Integration with cloud and IoT security</li></ul><h3>Conclusion</h3><p>Artificial Intelligence is transforming cybersecurity by making systems faster, smarter, and more efficient. It helps detect threats, prevent attacks, and respond quickly to incidents.</p><p>However, AI cannot completely replace human intelligence. A combination of AI and human expertise is necessary for strong cybersecurity.</p><p>As cyber threats continue to evolve, AI will become an essential tool in protecting digital systems and sensitive data.</p><p><strong>Author:</strong> Sujal Pabale<br><strong>Platform:</strong> LinkedIn / Portfolio</p>'
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
