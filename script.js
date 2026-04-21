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
    },
    'incident-response-soc': {
        title: 'Incident Response in Security Operations Centers (SOC): Tools, Techniques, and Real-World Applications',
        content: '<h3>Introduction</h3><p>In today\'s digital world, cyberattacks are increasing rapidly, targeting organizations of all sizes. To defend against these threats, companies rely on a Security Operations Center (SOC) — a centralized unit that monitors, detects, and responds to security incidents in real time.</p><p>One of the most critical functions of a SOC is Incident Response (IR). Incident response is the structured approach used to identify, manage, and mitigate cybersecurity threats before they cause major damage. This article explores the concepts, tools, techniques, and real-world importance of incident response in SOC environments.</p><h3>What is Incident Response?</h3><p>Incident Response is the process of handling security breaches, cyberattacks, or any suspicious activity within an organization\'s network.</p><p>It focuses on:</p><ul><li>Detecting threats quickly</li><li>Containing the attack</li><li>Eliminating the threat</li><li>Recovering systems</li><li>Preventing future incidents</li></ul><p>A well-planned incident response reduces damage, saves costs, and ensures business continuity.</p><h3>Phases of Incident Response</h3><p>Incident response follows a structured lifecycle. The most widely used model includes the following six phases:</p><h4>1. Preparation</h4><ul><li>Setting up tools, policies, and response plans</li><li>Training security teams</li><li>Creating incident response playbooks</li></ul><p>Example: Installing monitoring tools and defining response procedures.</p><h4>2. Identification</h4><ul><li>Detecting unusual activity or threats</li><li>Analyzing alerts and logs</li></ul><p>Example: A sudden spike in login failures may indicate a brute-force attack.</p><h4>3. Containment</h4><ul><li>Limiting the spread of the attack</li><li>Isolating affected systems</li></ul><p>Example: Disconnecting an infected system from the network.</p><h4>4. Eradication</h4><ul><li>Removing malware or threat sources</li><li>Fixing vulnerabilities</li></ul><p>Example: Deleting malicious files and patching software.</p><h4>5. Recovery</h4><ul><li>Restoring systems to normal operations</li><li>Monitoring for re-infection</li></ul><p>Example: Restoring data from backups.</p><h4>6. Lessons Learned</h4><ul><li>Reviewing the incident</li><li>Improving future response strategies</li></ul><p>Example: Updating firewall rules to prevent similar attacks.</p><h3>Common Tools Used in SOC for Incident Response</h3><p>SOC analysts use various tools to detect and respond to incidents effectively:</p><h4>1. SIEM (Security Information and Event Management)</h4><ul><li>Collects and analyzes logs from multiple systems</li><li>Provides real-time alerts</li></ul><p>Example: Tools like Splunk or IBM QRadar.</p><h4>2. EDR (Endpoint Detection and Response)</h4><ul><li>Monitors endpoint devices (laptops, servers)</li><li>Detects suspicious behavior</li></ul><p>Example: CrowdStrike, Microsoft Defender.</p><h4>3. SOAR (Security Orchestration, Automation, and Response)</h4><ul><li>Automates repetitive response tasks</li><li>Integrates multiple tools</li></ul><p>Example: Palo Alto Cortex XSOAR.</p><h4>4. Threat Intelligence Platforms</h4><ul><li>Provides information about known threats</li><li>Helps in proactive defense</li></ul><p>Example: VirusTotal, ThreatConnect.</p><h4>5. Network Monitoring Tools</h4><ul><li>Tracks network traffic</li><li>Identifies unusual patterns</li></ul><p>Example: Wireshark, Zeek.</p><h3>Techniques Used in Incident Response</h3><p>SOC teams use several techniques to investigate and respond to incidents:</p><ul><li><strong>Log Analysis:</strong> Reviewing system logs to identify suspicious activities.</li><li><strong>Malware Analysis:</strong> Studying malicious files to understand behavior.</li><li><strong>Digital Forensics:</strong> Collecting and preserving evidence.</li><li><strong>Threat Hunting:</strong> Proactively searching for hidden threats.</li><li><strong>Automation:</strong> Using scripts/tools to speed up response.</li></ul><p>These techniques help analysts quickly understand and neutralize threats.</p><h3>Real-Life Applications of Incident Response</h3><h4>1. Ransomware Attack</h4><p>A company\'s files are encrypted by ransomware.</p><ul><li>SOC detects unusual file activity</li><li>Systems are isolated (containment)</li><li>Malware is removed (eradication)</li><li>Data is restored from backups (recovery)</li></ul><h4>2. Phishing Attack</h4><p>Employees receive fake emails.</p><ul><li>SOC identifies suspicious email patterns</li><li>Blocks malicious domains</li><li>Educates employees to prevent future attacks</li></ul><h4>3. Insider Threat</h4><p>An employee tries to steal sensitive data.</p><ul><li>SOC detects unusual data transfers</li><li>Access is revoked</li><li>Investigation is conducted</li></ul><h3>Importance of Incident Response in SOC</h3><p>Incident response plays a vital role in cybersecurity:</p><ul><li><strong>Minimizes Damage:</strong> Reduces impact of attacks.</li><li><strong>Faster Recovery:</strong> Restores systems quickly.</li><li><strong>Protects Reputation:</strong> Prevents data leaks and trust loss.</li><li><strong>Ensures Compliance:</strong> Meets legal and regulatory requirements.</li><li><strong>Improves Security Posture:</strong> Helps learn and improve defenses.</li></ul><p>Without proper incident response, even small attacks can lead to major losses.</p><h3>Incident Response Lifecycle</h3><p>Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned</p><h3>Conclusion</h3><p>Incident Response is the backbone of any Security Operations Center. It ensures that cyber threats are detected early, handled efficiently, and prevented in the future. With the increasing number of cyberattacks, organizations must invest in strong incident response strategies, skilled professionals, and advanced tools.</p><p>By understanding and implementing effective incident response practices, companies can protect their data, maintain business continuity, and stay ahead of evolving cyber threats.</p><p><strong>Author:</strong> Sujal Pabale<br><strong>Platform:</strong> LinkedIn / Portfolio</p>'
    },
    'siem-soc': {
        title: 'Security Information and Event Management (SIEM): The Backbone of a Modern Security Operations Center',
        content: '<h3>Introduction</h3><p>In today\'s digital world, organizations face a constant stream of cyber threats ranging from malware attacks to data breaches. To effectively detect, monitor, and respond to these threats, companies rely on a centralized system known as a Security Operations Center (SOC). At the core of every SOC lies a powerful tool called Security Information and Event Management (SIEM). SIEM plays a crucial role in collecting, analyzing, and managing security data, making it one of the most important technologies in cybersecurity.</p><h3>What is SIEM?</h3><p>Security Information and Event Management (SIEM) is a security solution that gathers log data from multiple sources within an organization\'s IT infrastructure. These sources include servers, firewalls, applications, databases, and network devices. SIEM systems combine two main functions:</p><ul><li><strong>Security Information Management (SIM):</strong> Collects and stores log data for long-term analysis.</li><li><strong>Security Event Management (SEM):</strong> Monitors events in real time and detects potential threats.</li></ul><p>By integrating these two capabilities, SIEM provides a unified view of security events across the organization.</p><h3>How SIEM Works</h3><p>SIEM operates in several key steps:</p><ul><li><strong>Data Collection:</strong> Logs are collected from different devices such as routers, firewalls, and endpoints.</li><li><strong>Data Normalization:</strong> The collected data is standardized into a common format.</li><li><strong>Correlation:</strong> SIEM analyzes patterns and relationships between events to detect suspicious activities.</li><li><strong>Alerting:</strong> When a potential threat is identified, the system generates alerts.</li><li><strong>Reporting and Compliance:</strong> SIEM helps organizations generate reports for regulatory compliance.</li></ul><h3>Key Features of SIEM</h3><p>Some of the most important features of SIEM include:</p><ul><li>Real-time monitoring: Continuous tracking of network activity.</li><li>Threat detection: Identifying anomalies and malicious behavior.</li><li>Incident response support: Assisting SOC analysts in investigating incidents.</li><li>Log management: Centralized storage and analysis of logs.</li><li>Compliance reporting: Helping organizations meet legal and regulatory requirements.</li></ul><h3>Popular SIEM Tools</h3><p>Several tools are widely used in SOC environments for SIEM purposes. For example, <strong>Splunk Enterprise Security</strong> is known for its powerful data analytics and visualization capabilities. Another popular tool is <strong>IBM QRadar</strong>, which uses advanced threat intelligence to detect anomalies. <strong>Microsoft Sentinel</strong> is a cloud-based SIEM solution that integrates well with modern cloud environments like AWS and Azure.</p><h3>Real-Life Applications of SIEM</h3><p>SIEM is used in various real-world scenarios to enhance cybersecurity:</p><ul><li><strong>Detecting Insider Threats:</strong> SIEM can identify unusual user behavior, such as accessing sensitive data at odd hours.</li><li><strong>Preventing Data Breaches:</strong> By monitoring network traffic, SIEM can detect unauthorized access attempts.</li><li><strong>Compliance Management:</strong> Organizations use SIEM to comply with standards such as GDPR, HIPAA, and ISO 27001.</li><li><strong>Incident Investigation:</strong> SIEM provides detailed logs that help analysts trace the source of an attack.</li></ul><p>For example, if a hacker attempts multiple failed login attempts followed by a successful login from a different location, SIEM can correlate these events and flag them as suspicious.</p><h3>Importance of SIEM in SOC</h3><p>SIEM is considered the backbone of a SOC for several reasons:</p><ul><li><strong>Centralized Visibility:</strong> It provides a single dashboard to monitor the entire network.</li><li><strong>Faster Detection:</strong> Automated analysis helps identify threats quickly.</li><li><strong>Improved Response Time:</strong> Alerts enable quick action by security teams.</li><li><strong>Better Decision Making:</strong> Data-driven insights help analysts make informed decisions.</li></ul><p>Without SIEM, organizations would struggle to manage the vast amount of security data generated daily.</p><h3>Challenges of SIEM</h3><p><strong>Challenges:</strong></p><ul><li>High Cost: Implementation and maintenance can be expensive.</li><li>Complex Setup: Requires skilled professionals to configure and manage.</li><li>False Positives: SIEM may generate alerts that are not actual threats.</li><li>Data Overload: Handling large volumes of data can be overwhelming.</li></ul><p>However, with proper tuning and integration, these challenges can be minimized.</p><h3>Future of SIEM</h3><p>The future of SIEM is evolving with advancements in technologies such as Artificial Intelligence (AI) and Machine Learning (ML). Modern SIEM systems are becoming more intelligent by using behavioral analytics to detect unknown threats. Cloud-based SIEM solutions are also gaining popularity due to their scalability and flexibility.</p><p>Integration with automation tools like <strong>SOAR (Security Orchestration, Automation, and Response)</strong> is another trend that enhances incident response capabilities.</p><h3>Conclusion</h3><p>Security Information and Event Management (SIEM) is an essential component of a modern Security Operations Center. It enables organizations to monitor, detect, and respond to cyber threats effectively. By providing real-time insights and centralized visibility, SIEM helps improve security posture and reduce risks. Although it comes with certain challenges, its benefits far outweigh the limitations. As cyber threats continue to evolve, SIEM will remain a critical tool in safeguarding digital infrastructure.</p><p><strong>Author:</strong> Sujal Pabale<br><strong>Platform:</strong> LinkedIn / Portfolio</p>'
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
    
    document.addEventListener('click', function(e) {
        const link = e.target.closest('.article-link');
        if (!link) return;
        e.preventDefault();
        e.stopPropagation();

        const articleId = link.getAttribute('data-article');
        const article = articleData[articleId];

        if (article) {
            modalTitle.textContent = article.title;
            modalBody.innerHTML = article.content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
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
