/**
 * Univrs.io - Main JavaScript
 * Handles: Theme toggle, scroll reveal, mobile nav, smooth scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
  // ═══════════════════════════════════════════════════════════════
  // THEME TOGGLE
  // ═══════════════════════════════════════════════════════════════
  
  const themeToggle = document.querySelector('.theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Get stored theme or use system preference
  const getTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return prefersDark.matches ? 'dark' : 'light';
  };
  
  // Apply theme
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update toggle icon
    if (themeToggle) {
      themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    }
  };
  
  // Initialize theme
  setTheme(getTheme());
  
  // Toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
  
  // Listen for system theme changes
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
  
  // ═══════════════════════════════════════════════════════════════
  // NAVIGATION
  // ═══════════════════════════════════════════════════════════════
  
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  // Scroll detection for nav background
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add/remove scrolled class
    if (currentScroll > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile nav toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Active link highlighting
  const setActiveLink = () => {
    const path = window.location.pathname;
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (href !== '/' && path.includes(href))) {
        link.classList.add('active');
      } else if (href === '/' && (path === '/' || path === '/index.html')) {
        link.classList.add('active');
      }
    });
  };
  
  setActiveLink();
  
  // ═══════════════════════════════════════════════════════════════
  // SCROLL REVEAL ANIMATIONS
  // ═══════════════════════════════════════════════════════════════
  
  const revealElements = document.querySelectorAll('.reveal, .stagger-children');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealElements.forEach(el => revealObserver.observe(el));
  
  // ═══════════════════════════════════════════════════════════════
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ═══════════════════════════════════════════════════════════════
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = nav?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ═══════════════════════════════════════════════════════════════
  // ANIMATED COUNTER FOR STATS
  // ═══════════════════════════════════════════════════════════════
  
  const animateValue = (element, start, end, duration, suffix = '') => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * (end - start) + start);
      element.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };
  
  const statElements = document.querySelectorAll('[data-count]');
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const target = parseInt(entry.target.dataset.count, 10);
        const suffix = entry.target.dataset.suffix || '';
        animateValue(entry.target, 0, target, 2000, suffix);
      }
    });
  }, { threshold: 0.5 });
  
  statElements.forEach(el => statsObserver.observe(el));
  
  // ═══════════════════════════════════════════════════════════════
  // MYCELIAL NETWORK CANVAS ANIMATION (Hero background)
  // ═══════════════════════════════════════════════════════════════
  
  const canvas = document.getElementById('mycelium-canvas');
  
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationId;
    let nodes = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };
    
    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 25000);
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };
    
    const getThemeColors = () => {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      return {
        node: isDark ? 'rgba(0, 255, 213, 0.6)' : 'rgba(0, 139, 117, 0.6)',
        connection: isDark ? 'rgba(0, 255, 213, 0.15)' : 'rgba(0, 139, 117, 0.15)'
      };
    };
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const colors = getThemeColors();
      const time = Date.now() * 0.001;
      
      // Update and draw connections
      const maxDist = 150;
      
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        
        // Update position
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;
        
        // Bounce off edges
        if (nodeA.x < 0 || nodeA.x > canvas.width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > canvas.height) nodeA.vy *= -1;
        
        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.3;
            ctx.strokeStyle = colors.connection.replace('0.15', alpha.toFixed(2));
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
        
        // Draw node with pulse
        const pulse = Math.sin(time * 2 + nodeA.pulsePhase) * 0.3 + 0.7;
        ctx.fillStyle = colors.node;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(draw);
    };
    
    // Initialize
    resize();
    draw();
    
    // Handle resize
    window.addEventListener('resize', () => {
      cancelAnimationFrame(animationId);
      resize();
      draw();
    });
    
    // Reduce animation when not visible
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        draw();
      }
    });
  }
  
  // ═══════════════════════════════════════════════════════════════
  // COPY TO CLIPBOARD (for code blocks, etc.)
  // ═══════════════════════════════════════════════════════════════
  
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const text = button.dataset.copy;
      try {
        await navigator.clipboard.writeText(text);
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
  
  console.log('🍄 Univrs.io initialized — building regenerative infrastructure');
});
