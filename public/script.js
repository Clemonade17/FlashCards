class FlashcardApp {
    constructor() {
        this.flashcards = [];
        this.currentIndex = 0;
        this.currentUnit = "";
        this.stats = {
            correct: 0,
            incorrect: 0,
            total: 0
        };
        this.initializeEventListeners();
        this.loadStats();
        this.updateUnitStats();
    }

    initializeEventListeners() {
        // Card flip
        document.getElementById('flipBtn').addEventListener('click', () => this.flipCard());
        document.getElementById('flashcard').addEventListener('click', () => this.flipCard());

        // Navigation
        document.getElementById('prevBtn').addEventListener('click', () => this.previousCard());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextCard());



        // Shuffle and reset
        document.getElementById('shuffleBtn').addEventListener('click', () => this.shuffleCards());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetProgress());

        // Unit selection dropdown - auto-load when changed
        document.getElementById('unitSelect').addEventListener('change', (e) => {
            if (e.target.value) {
                this.loadSelectedUnit(e.target.value);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    this.flipCard();
                    break;
                case 'ArrowLeft':
                    this.previousCard();
                    break;
                case 'ArrowRight':
                    this.nextCard();
                    break;
                case '1':
                    if (document.getElementById('flashcard').classList.contains('flipped')) {
                        this.markCorrect();
                    }
                    break;
                case '2':
                    if (document.getElementById('flashcard').classList.contains('flipped')) {
                        this.markIncorrect();
                    }
                    break;
            }
        });
    }

    loadSelectedUnit(selectedUnit) {
        if (!selectedUnit) {
            return;
        }

        if (typeof HISTORY_UNITS !== 'undefined' && HISTORY_UNITS[selectedUnit]) {
            this.flashcards = HISTORY_UNITS[selectedUnit].map(card => ({
                ...card,
                mastered: false
            }));
            
            this.currentUnit = selectedUnit;
            this.currentIndex = 0;
            this.stats.total = this.flashcards.length;
            this.stats.correct = 0;
            this.stats.incorrect = 0;

            // Update the unit name display
            document.getElementById('currentUnitName').textContent = selectedUnit;
            
            this.saveStats();
            this.updateDisplay();
            this.updateUnitStats();

            this.showSuccessMessage(`Loaded ${this.flashcards.length} terms from ${selectedUnit}!`);
        } else {
            alert('Unit not found. Please try again.');
        }
    }

    flipCard() {
        if (this.flashcards.length === 0) return;
        
        const flashcard = document.getElementById('flashcard');
        flashcard.classList.toggle('flipped');
    }

    markCorrect() {
        if (this.flashcards.length === 0) return;
        
        const currentCard = this.flashcards[this.currentIndex];
        if (!currentCard.mastered) {
            currentCard.mastered = true;
            this.stats.correct++;
            this.saveStats();
            this.updateStats();
            this.showSuccessMessage('Great job! Marked as correct!');
        }
        
        // Auto-advance to next card (updateDisplay will reset flip state)
        this.nextCard();
    }

    markIncorrect() {
        if (this.flashcards.length === 0) return;
        
        const currentCard = this.flashcards[this.currentIndex];
        if (currentCard.mastered) {
            currentCard.mastered = false;
            this.stats.correct--;
        }
        this.stats.incorrect++;
        this.saveStats();
        this.updateStats();
        this.showSuccessMessage('Keep studying! Marked as incorrect.');
        
        // Auto-advance to next card (updateDisplay will reset flip state)
        this.nextCard();
    }

    previousCard() {
        if (this.flashcards.length === 0) return;
        
        this.currentIndex = (this.currentIndex - 1 + this.flashcards.length) % this.flashcards.length;
        this.updateDisplay();
        this.updateNavigationButtons();
    }

    nextCard() {
        if (this.flashcards.length === 0) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.flashcards.length;
        this.updateDisplay();
        this.updateNavigationButtons();
    }

    shuffleCards() {
        if (this.flashcards.length === 0) return;
        
        for (let i = this.flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.flashcards[i], this.flashcards[j]] = [this.flashcards[j], this.flashcards[i]];
        }
        
        this.currentIndex = 0;
        this.updateDisplay();
        this.showSuccessMessage('Cards shuffled!');
    }

    resetProgress() {
        if (this.flashcards.length === 0) return;
        
        if (confirm('Are you sure you want to reset your progress for this unit?')) {
            this.flashcards.forEach(card => card.mastered = false);
            this.stats.correct = 0;
            this.stats.incorrect = 0;
            this.currentIndex = 0;
            this.saveStats();
            this.updateDisplay();
            this.updateStats();
            this.showSuccessMessage('Progress reset!');
        }
    }

    updateDisplay() {
        if (this.flashcards.length === 0) {
            this.showWelcomeMessage();
            return;
        }

        const currentCard = this.flashcards[this.currentIndex];
        const cardFront = document.getElementById('cardFront');
        const cardBack = document.getElementById('cardBack');

        // Force reset flip state immediately (bypass CSS transition)
        const flashcard = document.getElementById('flashcard');
        flashcard.style.transition = 'none';
        flashcard.classList.remove('flipped');
        // Force a reflow to ensure the transition is disabled
        flashcard.offsetHeight;
        // Re-enable the transition
        flashcard.style.transition = '';

        // Front of card (term only)
        cardFront.innerHTML = `
            <h2>${currentCard.term}</h2>
            <p>Click to reveal details</p>
        `;

        // Back of card (all details)
        cardBack.innerHTML = `
            <div class="term-details">
                <h3>${currentCard.term}</h3>
                <div class="detail-row">
                    <span class="detail-label">Who:</span>
                    <span class="detail-value">${currentCard.who}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">What:</span>
                    <span class="detail-value">${currentCard.what}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Where:</span>
                    <span class="detail-value">${currentCard.where}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">When:</span>
                    <span class="detail-value">${currentCard.when}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Why Significant:</span>
                    <span class="detail-value">${currentCard.whySignificant}</span>
                </div>
            </div>
            <div class="study-controls">
                <button id="correctBtn" class="btn btn-success">✅ Got it right!</button>
                <button id="incorrectBtn" class="btn btn-danger">❌ Got it wrong</button>
            </div>
        `;

        // Update progress
        this.updateProgress();
        this.updateNavigationButtons();
        
        // Add event listeners to the study control buttons
        this.addStudyControlListeners();
    }

    addStudyControlListeners() {
        // Add event listeners to the study control buttons that are now inside the card
        const correctBtn = document.getElementById('correctBtn');
        const incorrectBtn = document.getElementById('incorrectBtn');
        
        if (correctBtn) {
            correctBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up to the card
                this.markCorrect();
            });
        }
        if (incorrectBtn) {
            incorrectBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up to the card
                this.markIncorrect();
            });
        }
    }

    updateProgress() {
        const progressText = document.getElementById('progressText');
        const progressFill = document.getElementById('progressFill');
        
        if (this.flashcards.length > 0) {
            const progress = ((this.currentIndex + 1) / this.flashcards.length) * 100;
            progressText.textContent = `${this.currentIndex + 1} / ${this.flashcards.length}`;
            progressFill.style.width = `${progress}%`;
        } else {
            progressText.textContent = '0 / 0';
            progressFill.style.width = '0%';
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (this.flashcards.length === 0) {
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }
        
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }

    updateStats() {
        document.getElementById('correctCount').textContent = this.stats.correct;
        document.getElementById('incorrectCount').textContent = this.stats.incorrect;
        
        const accuracy = this.stats.total > 0 ? Math.round((this.stats.correct / this.stats.total) * 100) : 0;
        document.getElementById('accuracyPercent').textContent = `${accuracy}%`;
    }

    updateUnitStats() {
        if (typeof HISTORY_UNITS !== 'undefined') {
            let totalTerms = 0;
            Object.values(HISTORY_UNITS).forEach(unit => {
                totalTerms += unit.length;
            });
            
            document.getElementById('totalTerms').textContent = totalTerms;
            document.getElementById('currentUnit').textContent = this.currentUnit || 'None';
        }
    }

    showWelcomeMessage() {
        const cardFront = document.getElementById('cardFront');
        const cardBack = document.getElementById('cardBack');

        cardFront.innerHTML = `
            <h2>Welcome to History Flashcards!</h2>
            <p>Select a unit to begin studying!</p>
        `;

        cardBack.innerHTML = `
            <h2>Getting Started</h2>
            <p>1. Choose a unit from the dropdown above<br>
               2. The unit will load automatically<br>
               3. Click cards to flip and reveal details<br>
               4. Use navigation buttons or arrow keys</p>
            <div style="margin-top: 20px; text-align: left; font-size: 0.9rem; flex: 1;">
                <strong>Available Units:</strong><br>
                • Unit 1: Early Colonial Period (1492-1607)<br>
                • Unit 2: Colonial Development (1607-1754)<br>
                • Unit 3: Road to Revolution (1754-1800)<br>
                • And more...
            </div>
            <div class="study-controls">
                <button id="correctBtn" class="btn btn-success">✅ Got it right!</button>
                <button id="incorrectBtn" class="btn btn-danger">❌ Got it wrong</button>
            </div>
        `;
        // Reset progress display and unit name
        document.getElementById('progressText').textContent = '0 / 0';
        document.getElementById('progressFill').style.width = '0%';
        document.getElementById('currentUnitName').textContent = 'No unit selected';

        this.updateNavigationButtons();
    }

    showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        document.body.appendChild(successDiv);

        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    saveStats() {
        localStorage.setItem('flashcardStats', JSON.stringify(this.stats));
        localStorage.setItem('flashcards', JSON.stringify(this.flashcards));
        localStorage.setItem('currentUnit', this.currentUnit);
    }

    loadStats() {
        const savedStats = localStorage.getItem('flashcardStats');
        const savedFlashcards = localStorage.getItem('flashcards');
        const savedUnit = localStorage.getItem('currentUnit');
        
        if (savedStats) {
            this.stats = JSON.parse(savedStats);
        }
        if (savedFlashcards) {
            this.flashcards = JSON.parse(savedFlashcards);
            this.currentIndex = 0;
        }
        
        if (savedUnit) {
            this.currentUnit = savedUnit;
            const unitSelect = document.getElementById('unitSelect');
            if (unitSelect) {
                unitSelect.value = savedUnit;
            }
            // Update the unit name display
            document.getElementById('currentUnitName').textContent = savedUnit;
        }
        
        this.updateStats();
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new FlashcardApp();
});
