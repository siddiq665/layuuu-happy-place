/**
 * ==============================================================================
 * Layuuu’s Little Happy Place — Vanilla JavaScript
 * Handcrafted with love & friendship by Vishnu for Layuuu.
 * 
 * Features:
 *  1. Pure Canvas-based celebration confetti (zero external libraries)
 *  2. Ambient floating pastel hearts, flowers, butterflies, and stars
 *  3. Surprise modal with Vishnu's heartfelt personal letter
 *  4. Instant Smile & Mood Booster station with customized encouragement
 *  5. Six interactive Happy Corner cards (Quotes, Self-care, Fun, Dreams, Bubbles, Smiles)
 *  6. Secret Vault unwrapping animation
 *  7. Full accessibility support & motion toggle controls
 * ==============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------------------------
     1. Data Stores (Quotes, Smiles, Activities, Reasons, Compliments)
     ---------------------------------------------------------------------------- */

  const INSPIRING_QUOTES = [
    { text: "You don't have to have everything figured out today. Just take one gentle step at a time.", author: "Gentle Reminder" },
    { text: "You are allowed to be both a masterpiece and a work in progress simultaneously.", author: "Sophia Bush" },
    { text: "Your smile has the magical ability to bring light into rooms you haven't even stepped into yet.", author: "Friendship Truth" },
    { text: "Never apologize for having high standards for kindness, honesty, and respect. You deserve nothing less.", author: "For Layuuu" },
    { text: "Breathe. You have survived 100% of your hardest days, and you are stronger than you give yourself credit for.", author: "Daily Truth" },
    { text: "It is okay to rest. Rest is not quitting; it is recharging so you can shine again tomorrow.", author: "Cozy Reminder" },
    { text: "You don't need anyone's validation to know that your feelings and dreams are real and worthy.", author: "Always Remember" },
    { text: "The universe took its time creating a kind, thoughtful soul like you. Treat yourself with that same gentle care.", author: "Affirmation" },
    { text: "Even the tallest sunflowers start from tiny seeds hidden under the earth. Give your dreams room to grow.", author: "Patience & Growth" },
    { text: "Keep shining your authentic light, Layuuu. The right people will cherish and protect it.", author: "Vishnu's Note" }
  ];

  const MOOD_MESSAGES = {
    general: {
      title: "You Are Truly One In A Million, Layuuu! 🌸",
      text: "Don’t ever forget how much warmth and positive light you bring into the world. You make everything brighter just by being yourself!",
      icon: "🌸"
    },
    tired: {
      title: "Time To Slow Down & Breathe, Bestie ☕",
      text: "You’ve worked hard and poured so much energy into your days. Put on cozy clothes, relax your mind, and remember: today was enough, and so are you.",
      icon: "☕"
    },
    overwhelmed: {
      title: "One Tiny Step At A Time 🌧️➡️☀️",
      text: "When everything feels like too much at once, focus only on the very next 10 minutes. You don’t have to carry the whole mountain today.",
      icon: "🌧️"
    },
    doubt: {
      title: "Look How Far You’ve Come! 💭✨",
      text: "Doubt is just a cloud passing through the sky; it isn't who you are. Your talents, kindness, and heart speak for themselves. Believe in yourself!",
      icon: "💭"
    },
    laugh: {
      title: "Why Did The Teddy Bear Say No To Dessert? 🧸",
      text: "Because it was already stuffed! 😄 I hope this silly little joke brought at least a small chuckle to your face today!",
      icon: "🌷"
    },
    friend: {
      title: "Vishnu Is Always Cheering For You! 🫂💗",
      text: "True friendship means having someone in your corner who wants to see you peaceful, happy, and thriving. Whenever you need support, I'm right here!",
      icon: "🫂"
    }
  };

  const RANDOM_SMILES = [
    { title: "Sweet Fact About You 🌸", text: "You bring so much sincerity and goodness wherever you go. That's a superpower!", icon: "🌸" },
    { title: "Mini Giggle Delivery 🦆", text: "What do you call a duck that gets straight A's? A wise quacker! Hope that made you smile, Layuuu!", icon: "🦆" },
    { title: "Friendly Reminder 💖", text: "You are allowed to take up space, say 'no' to things that drain you, and protect your peace.", icon: "💖" },
    { title: "Pure Bestie Truth ⭐", text: "If smiling was an Olympic sport, you’d win gold every single day. Keep that sparkle glowing!", icon: "⭐" },
    { title: "Wholesome Thought 🐶", text: "Somewhere in the world right now, a tiny golden retriever puppy is falling asleep dreaming of cuddles.", icon: "🐶" },
    { title: "Warm Hug In Words 🧸", text: "Sending you an invisible, warm best-friend hug. Wrap yourself in cozy blankets and take it easy!", icon: "🧸" },
    { title: "Did You Know? 🌻", text: "Sunflowers turn towards each other when it's cloudy to share their warmth. Just like good friends do!", icon: "🌻" }
  ];

  const FUN_ACTIVITIES = [
    { icon: "🎧", text: "Put on your favorite comfort song, close your eyes, and let yourself sing or sway along!" },
    { icon: "☕", text: "Make a warm mug of hot chocolate, coffee, or chamomile tea and sip it slowly without looking at any screens." },
    { icon: "🐱", text: "Search up 'funny clumsy kittens' or 'baby red pandas' and watch 3 minutes of pure wholesome comedy." },
    { icon: "✏️", text: "Grab a scrap of paper and draw the sillliest, roundest cartoon cat you can imagine." },
    { icon: "🚶‍♀️", text: "Step outside or near an open window, look up at the clouds or stars, and take five slow, deep breaths." },
    { icon: "📚", text: "Re-read your favorite cozy book chapter or watch an episode of a comforting childhood show." },
    { icon: "🧸", text: "Make a soft pillow nest on your bed, wrap yourself in your flappiest blanket, and just unwind for 15 minutes." },
    { icon: "🎵", text: "Create a 5-song playlist titled 'Layuuu's Good Vibes Only' and put it on shuffle." }
  ];

  const REASONS_TO_SMILE = [
    { emoji: "☕", text: "The warm, comforting first sip of hot chocolate or tea on a cozy evening." },
    { emoji: "🌅", text: "Sunsets painted in dreamy pink, lavender, and gold across the evening sky." },
    { emoji: "🐶", text: "How happy dogs get when someone they love simply enters the room." },
    { emoji: "🛌", text: "Waking up in the morning and realizing you still have hours left to sleep in cozy blankets." },
    { emoji: "🎶", text: "Hearing a song you haven't heard in years that instantly brings back fond memories." },
    { emoji: "🥞", text: "The delicious smell of freshly baked pastries, warm waffles, or bakery cookies." },
    { emoji: "🌧️", text: "The peaceful, soothing sound of gentle rain tapping against the window while you're safe inside." },
    { emoji: "💌", text: "Having real friends who genuinely care about your happiness and well-being." },
    { emoji: "🌸", text: "Watching flowers bloom in springtime and realizing fresh starts happen every day." }
  ];

  const BUBBLE_COMPLIMENTS = [
    "You rock! 💖",
    "Stay sweet! 🌸",
    "Breathe easy ☁️",
    "You matter! ✨",
    "Proud of you! 🌟",
    "Be kind to you 🌷",
    "Big smile! 😊",
    "You're strong! 💪",
    "Shine on! ⭐",
    "So creative! 🎨",
    "Peace & joy 🕊️",
    "Bestie cheer! 💗"
  ];

  /* ----------------------------------------------------------------------------
     2. Self-Contained Celebration Confetti Engine (Vanilla Canvas)
     ---------------------------------------------------------------------------- */
  const canvas = document.getElementById('confetti-canvas');
  let ctx = canvas ? canvas.getContext('2d') : null;
  let confettiParticles = [];
  let isConfettiRunning = false;
  let confettiAnimationId = null;

  function resizeCanvas() {
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const CONFETTI_COLORS = ['#ff9aa2', '#ffd1dc', '#c5a3ff', '#e8dff5', '#ffdfba', '#ffd166', '#a0c4ff'];

  function createConfettiBurst(count = 70) {
    if (!canvas || !ctx) return;
    resizeCanvas();

    const startX = canvas.width / 2;
    const startY = canvas.height * 0.45;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 4 + Math.random() * 8;
      confettiParticles.push({
        x: startX + (Math.random() - 0.5) * 60,
        y: startY + (Math.random() - 0.5) * 60,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 3,
        size: 5 + Math.random() * 7,
        color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 10,
        shape: Math.random() > 0.4 ? 'rect' : 'circle',
        alpha: 1,
        decay: 0.006 + Math.random() * 0.008
      });
    }

    if (!isConfettiRunning) {
      isConfettiRunning = true;
      animateConfetti();
    }
  }

  function animateConfetti() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // Gravity
      p.vx *= 0.98; // Friction
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.alpha <= 0 || p.y > canvas.height + 20) {
        confettiParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    if (confettiParticles.length > 0) {
      confettiAnimationId = requestAnimationFrame(animateConfetti);
    } else {
      isConfettiRunning = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  /* ----------------------------------------------------------------------------
     3. Ambient Floating Background Elements (Hearts, Flowers, Stars, Butterflies)
     ---------------------------------------------------------------------------- */
  const decorContainer = document.getElementById('floating-decorations');
  const FLOATING_EMOJIS = ['💗', '🌸', '✨', '🦋', '🌷', '💖', '⭐', '🌻', '💕', '🧸'];

  function initFloatingDecorations() {
    if (!decorContainer) return;
    // Clear existing
    decorContainer.innerHTML = '';
    const totalCount = window.innerWidth < 600 ? 12 : 22;

    for (let i = 0; i < totalCount; i++) {
      const el = document.createElement('span');
      el.className = 'floating-item';
      el.textContent = FLOATING_EMOJIS[Math.floor(Math.random() * FLOATING_EMOJIS.length)];
      
      const leftPos = Math.random() * 96; // 0% to 96%
      const duration = 14 + Math.random() * 16; // 14s to 30s
      const delay = Math.random() * -25; // staggered start
      const size = 1.1 + Math.random() * 1.3; // rem

      el.style.left = `${leftPos}vw`;
      el.style.animationDuration = `${duration}s`;
      el.style.animationDelay = `${delay}s`;
      el.style.fontSize = `${size}rem`;

      decorContainer.appendChild(el);
    }
  }
  initFloatingDecorations();

  /* ----------------------------------------------------------------------------
     4. Surprise Modal & Heartfelt Letter (Personalized for Layuuu)
     ---------------------------------------------------------------------------- */
  const surpriseModal = document.getElementById('surprise-modal');
  const openSurpriseBtn = document.getElementById('open-surprise-btn');
  const openEnvelopeBtn = document.getElementById('open-envelope-btn');
  const closeSurpriseBtn = document.getElementById('close-surprise-btn');
  const modalCelebrateBtn = document.getElementById('modal-celebrate-btn');
  const modalCopyBtn = document.getElementById('modal-copy-btn');
  let lastActiveElement = null;

  function openSurpriseModal() {
    if (!surpriseModal) return;
    lastActiveElement = document.activeElement;
    surpriseModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    
    // Celebration confetti
    createConfettiBurst(80);

    // Focus close button for accessibility
    if (closeSurpriseBtn) {
      setTimeout(() => closeSurpriseBtn.focus(), 100);
    }
  }

  function closeSurpriseModal() {
    if (!surpriseModal) return;
    surpriseModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }

  if (openSurpriseBtn) openSurpriseBtn.addEventListener('click', openSurpriseModal);
  if (openEnvelopeBtn) openEnvelopeBtn.addEventListener('click', openSurpriseModal);
  if (closeSurpriseBtn) closeSurpriseBtn.addEventListener('click', closeSurpriseModal);

  // Close on outside click
  if (surpriseModal) {
    surpriseModal.addEventListener('click', (e) => {
      if (e.target === surpriseModal) {
        closeSurpriseModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && surpriseModal && !surpriseModal.hasAttribute('hidden')) {
      closeSurpriseModal();
    }
  });

  // Modal Confetti Button
  if (modalCelebrateBtn) {
    modalCelebrateBtn.addEventListener('click', () => {
      createConfettiBurst(100);
      modalCelebrateBtn.textContent = 'Sparkles Released! ✨';
      setTimeout(() => {
        modalCelebrateBtn.textContent = 'Release Confetti! 🎉';
      }, 1500);
    });
  }

  // Modal Copy Button
  if (modalCopyBtn) {
    modalCopyBtn.addEventListener('click', async () => {
      const messageText = `Hey Layuuu! 💗 Even on difficult days, remember that you deserve happiness, kindness, and people who treat you with honesty and respect. Take your time, keep believing in yourself, and never forget that you matter. I'm always cheering for you as your friend. — Vishnu 💗`;
      try {
        await navigator.clipboard.writeText(messageText);
        modalCopyBtn.textContent = 'Copied to Clipboard! 💖';
      } catch (err) {
        modalCopyBtn.textContent = 'Saved In Your Heart 💖';
      }
      setTimeout(() => {
        modalCopyBtn.textContent = 'Copy Sweet Note 📋';
      }, 2000);
    });
  }

  /* ----------------------------------------------------------------------------
     5. Warm Hugs Cheer Counter
     ---------------------------------------------------------------------------- */
  const sendCheerBtn = document.getElementById('send-cheer-btn');
  const cheerNumberEl = document.getElementById('cheer-number');
  let cheerCount = 128;

  // Retrieve saved count if exists
  try {
    const savedCount = localStorage.getItem('layuuu_hugs_count');
    if (savedCount) {
      cheerCount = parseInt(savedCount, 10) || 128;
    }
  } catch (e) {
    // LocalStorage fallback
  }

  if (cheerNumberEl) cheerNumberEl.textContent = cheerCount;

  if (sendCheerBtn) {
    sendCheerBtn.addEventListener('click', (e) => {
      cheerCount++;
      if (cheerNumberEl) cheerNumberEl.textContent = cheerCount;
      try {
        localStorage.setItem('layuuu_hugs_count', cheerCount);
      } catch (e) {}

      // Spawn temporary floating heart near button
      createFloatingHeartOnTap(e.clientX || (window.innerWidth / 2), e.clientY || (window.innerHeight / 2));
      createConfettiBurst(25);
    });
  }

  function createFloatingHeartOnTap(x, y) {
    const heart = document.createElement('div');
    heart.textContent = '💗';
    heart.style.position = 'fixed';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.transform = 'translate(-50%, -50%) scale(1)';
    heart.style.fontSize = '1.8rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.transition = 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
    document.body.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transform = 'translate(-50%, -120px) scale(1.6)';
      heart.style.opacity = '0';
    });

    setTimeout(() => {
      if (heart.parentNode) heart.parentNode.removeChild(heart);
    }, 1000);
  }

  /* ----------------------------------------------------------------------------
     6. Interactive Smile & Mood Booster Station
     ---------------------------------------------------------------------------- */
  const moodChips = document.querySelectorAll('.mood-chip');
  const smileBox = document.getElementById('smile-box');
  const smileIcon = document.getElementById('smile-icon');
  const smileTitle = document.getElementById('smile-title');
  const smileText = document.getElementById('smile-text');
  const makeMeSmileBtn = document.getElementById('make-me-smile-btn');
  const newQuoteBtn = document.getElementById('new-quote-btn');

  function updateSmileDisplay(title, text, icon) {
    if (!smileBox) return;
    smileBox.style.opacity = '0';
    smileBox.style.transform = 'translateY(8px)';
    
    setTimeout(() => {
      if (smileTitle) smileTitle.textContent = title;
      if (smileText) smileText.textContent = text;
      if (smileIcon) smileIcon.textContent = icon;
      smileBox.style.opacity = '1';
      smileBox.style.transform = 'translateY(0)';
    }, 200);
  }

  moodChips.forEach(chip => {
    chip.addEventListener('click', () => {
      moodChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const moodKey = chip.getAttribute('data-mood');
      const moodData = MOOD_MESSAGES[moodKey] || MOOD_MESSAGES.general;
      updateSmileDisplay(moodData.title, moodData.text, moodData.icon);
      createConfettiBurst(20);
    });
  });

  if (makeMeSmileBtn) {
    makeMeSmileBtn.addEventListener('click', () => {
      const randomItem = RANDOM_SMILES[Math.floor(Math.random() * RANDOM_SMILES.length)];
      updateSmileDisplay(randomItem.title, randomItem.text, randomItem.icon);
      createConfettiBurst(35);
      
      // Button animation feedback
      makeMeSmileBtn.classList.add('pulse-btn');
      setTimeout(() => makeMeSmileBtn.classList.remove('pulse-btn'), 600);
    });
  }

  if (newQuoteBtn) {
    newQuoteBtn.addEventListener('click', () => {
      const randomQuote = INSPIRING_QUOTES[Math.floor(Math.random() * INSPIRING_QUOTES.length)];
      updateSmileDisplay(`Quote: ${randomQuote.author} ✨`, `“${randomQuote.text}”`, '🌟');
      createConfettiBurst(25);
    });
  }

  /* ----------------------------------------------------------------------------
     7. The Happy Corner: 6 Interactive Cards
     ---------------------------------------------------------------------------- */

  // Card 1: Positive Quotes Card
  const cornerQuoteText = document.getElementById('corner-quote-text');
  const cornerQuoteAuthor = document.getElementById('corner-quote-author');
  const nextCornerQuoteBtn = document.getElementById('next-corner-quote-btn');
  const copyQuoteBtn = document.getElementById('copy-quote-btn');
  let currentQuoteIndex = 0;

  function cycleCornerQuote() {
    if (!cornerQuoteText) return;
    currentQuoteIndex = (currentQuoteIndex + 1) % INSPIRING_QUOTES.length;
    const q = INSPIRING_QUOTES[currentQuoteIndex];

    cornerQuoteText.style.opacity = '0';
    setTimeout(() => {
      cornerQuoteText.textContent = `“${q.text}”`;
      if (cornerQuoteAuthor) cornerQuoteAuthor.textContent = `— ${q.author}`;
      cornerQuoteText.style.opacity = '1';
    }, 200);
  }

  if (nextCornerQuoteBtn) {
    nextCornerQuoteBtn.addEventListener('click', () => {
      cycleCornerQuote();
      createConfettiBurst(15);
    });
  }

  if (copyQuoteBtn) {
    copyQuoteBtn.addEventListener('click', async () => {
      const q = INSPIRING_QUOTES[currentQuoteIndex];
      const copyStr = `“${q.text}” — ${q.author}`;
      try {
        await navigator.clipboard.writeText(copyStr);
        copyQuoteBtn.textContent = '✅';
      } catch (err) {
        copyQuoteBtn.textContent = '💗';
      }
      setTimeout(() => { copyQuoteBtn.textContent = '📋'; }, 1500);
    });
  }

  // Card 2: Self-Care Checklist
  const selfCareCheckboxes = document.querySelectorAll('.self-care-checkbox');
  const selfCareProgress = document.getElementById('self-care-progress');

  function updateSelfCareProgress() {
    const total = selfCareCheckboxes.length;
    let checkedCount = 0;
    selfCareCheckboxes.forEach((cb, idx) => {
      if (cb.checked) checkedCount++;
      // Save state
      try {
        localStorage.setItem(`layuuu_selfcare_${idx}`, cb.checked ? '1' : '0');
      } catch (e) {}
    });

    if (selfCareProgress) {
      if (checkedCount === 0) {
        selfCareProgress.textContent = "Tap the circles to check them off! 💖";
      } else if (checkedCount === total) {
        selfCareProgress.textContent = "All done! You're taking such gentle care of yourself! 🌸🎉";
        createConfettiBurst(50);
      } else {
        selfCareProgress.textContent = `Yay! ${checkedCount} of ${total} kindnesses done. Keep going! ✨`;
      }
    }
  }

  // Load saved state
  selfCareCheckboxes.forEach((cb, idx) => {
    try {
      const val = localStorage.getItem(`layuuu_selfcare_${idx}`);
      if (val === '1') cb.checked = true;
    } catch (e) {}
    cb.addEventListener('change', updateSelfCareProgress);
  });
  updateSelfCareProgress();

  // Card 3: Fun Activities
  const activityIcon = document.getElementById('activity-icon');
  const activityText = document.getElementById('activity-text');
  const randomActivityBtn = document.getElementById('random-activity-btn');
  let currentActivityIdx = 0;

  if (randomActivityBtn) {
    randomActivityBtn.addEventListener('click', () => {
      currentActivityIdx = (currentActivityIdx + 1) % FUN_ACTIVITIES.length;
      const act = FUN_ACTIVITIES[currentActivityIdx];
      if (activityIcon) activityIcon.textContent = act.icon;
      if (activityText) activityText.textContent = act.text;
      createConfettiBurst(20);
    });
  }

  // Card 4: Dreams & Goals (Wish Launcher)
  const wishInput = document.getElementById('wish-input');
  const sendWishBtn = document.getElementById('send-wish-btn');
  const wishFeedback = document.getElementById('wish-feedback');

  function handleSendWish() {
    if (!wishInput || !wishFeedback) return;
    const wish = wishInput.value.trim();
    if (!wish) {
      wishFeedback.textContent = "Please type a dream or wish first! 🌟";
      wishInput.focus();
      return;
    }

    wishFeedback.textContent = `✨ Your wish “${wish}” has been sent into the stars! Believe in yourself, Layuuu! ⭐`;
    wishInput.value = '';
    createConfettiBurst(60);
  }

  if (sendWishBtn) sendWishBtn.addEventListener('click', handleSendWish);
  if (wishInput) {
    wishInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSendWish();
    });
  }

  // Card 5: Mood Boosters (Bubble Wrap)
  const bubbleWrapContainer = document.getElementById('bubble-wrap');
  const resetBubblesBtn = document.getElementById('reset-bubbles-btn');

  function createBubbleWrap() {
    if (!bubbleWrapContainer) return;
    bubbleWrapContainer.innerHTML = '';

    BUBBLE_COMPLIMENTS.forEach((compliment, i) => {
      const bubble = document.createElement('button');
      bubble.className = 'bubble-btn';
      bubble.type = 'button';
      bubble.setAttribute('aria-label', `Pop bubble ${i + 1}`);
      bubble.textContent = '💖';

      bubble.addEventListener('click', () => {
        if (!bubble.classList.contains('popped')) {
          bubble.classList.add('popped');
          bubble.textContent = '🌸';
          createFloatingHeartOnTap(bubble.getBoundingClientRect().left + 20, bubble.getBoundingClientRect().top);
          createConfettiBurst(15);
          
          // Temporary compliment toast / tooltip
          if (smileTitle && smileText) {
            updateSmileDisplay("Popped A Bestie Compliment! 💖", compliment, "✨");
          }
        }
      });

      bubbleWrapContainer.appendChild(bubble);
    });
  }
  createBubbleWrap();

  if (resetBubblesBtn) {
    resetBubblesBtn.addEventListener('click', () => {
      createBubbleWrap();
      createConfettiBurst(25);
    });
  }

  // Card 6: Little Reasons to Smile
  const reasonEmoji = document.getElementById('reason-emoji');
  const reasonText = document.getElementById('reason-text');
  const nextReasonBtn = document.getElementById('next-reason-btn');
  let currentReasonIdx = 0;

  if (nextReasonBtn) {
    nextReasonBtn.addEventListener('click', () => {
      currentReasonIdx = (currentReasonIdx + 1) % REASONS_TO_SMILE.length;
      const r = REASONS_TO_SMILE[currentReasonIdx];
      if (reasonEmoji) reasonEmoji.textContent = r.emoji;
      if (reasonText) reasonText.textContent = r.text;
      createConfettiBurst(15);
    });
  }

  /* ----------------------------------------------------------------------------
     8. Secret Surprise / Hidden Message Vault
     ---------------------------------------------------------------------------- */
  const revealSecretBtn = document.getElementById('reveal-secret-btn');
  const vaultGiftIcon = document.getElementById('vault-gift-icon');
  const vaultRevealedContent = document.getElementById('vault-revealed-content');

  function toggleSecretVault() {
    if (!vaultRevealedContent || !revealSecretBtn) return;
    const isHidden = vaultRevealedContent.hasAttribute('hidden');

    if (isHidden) {
      vaultRevealedContent.removeAttribute('hidden');
      if (vaultGiftIcon) vaultGiftIcon.style.display = 'none';
      revealSecretBtn.textContent = 'Wrap Up Secret Note 🎀';
      createConfettiBurst(90);
    } else {
      vaultRevealedContent.setAttribute('hidden', '');
      if (vaultGiftIcon) vaultGiftIcon.style.display = 'block';
      revealSecretBtn.textContent = 'Unwrap The Secret Message 🎁';
    }
  }

  if (revealSecretBtn) revealSecretBtn.addEventListener('click', toggleSecretVault);
  if (vaultGiftIcon) vaultGiftIcon.addEventListener('click', toggleSecretVault);

  /* ----------------------------------------------------------------------------
     9. Accessibility & Reduced Motion Toggle
     ---------------------------------------------------------------------------- */
  const toggleMotionBtn = document.getElementById('toggle-motion-btn');
  let isMotionReduced = false;

  // Check system preferences
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    isMotionReduced = true;
    document.body.classList.add('reduce-motion');
  }

  function updateMotionButtonState() {
    if (!toggleMotionBtn) return;
    const iconSpan = toggleMotionBtn.querySelector('.ctrl-icon');
    const labelSpan = toggleMotionBtn.querySelector('.ctrl-label');
    if (isMotionReduced) {
      if (iconSpan) iconSpan.textContent = '▶️';
      if (labelSpan) labelSpan.textContent = 'Resume Motion';
    } else {
      if (iconSpan) iconSpan.textContent = '✨';
      if (labelSpan) labelSpan.textContent = 'Pause Motion';
    }
  }
  updateMotionButtonState();

  if (toggleMotionBtn) {
    toggleMotionBtn.addEventListener('click', () => {
      isMotionReduced = !isMotionReduced;
      if (isMotionReduced) {
        document.body.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
      }
      updateMotionButtonState();
    });
  }

});

