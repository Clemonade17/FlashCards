# 📚 History Study Flashcards Web App

A beautiful, interactive web application for studying history with detailed flashcards organized by units. Perfect for AP US History, World History, and other history courses!

## ✨ Features

- **Unit-Based Organization**: 9 comprehensive units covering American history from 1492 to present
- **Interactive History Flashcards**: Click to flip cards and reveal comprehensive historical details
- **6-Column Format Support**: Each card includes Term, Who, What, Where, When, Why Significant
- **Progress Tracking**: Monitor your study progress with statistics
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Keyboard Navigation**: Use arrow keys and spacebar for easy navigation
- **Progress Persistence**: Your progress is automatically saved locally
- **Shuffle Mode**: Randomize cards for better learning retention
- **Unit Selection**: Choose specific time periods to focus your studies

## 🚀 Getting Started

### Option 1: Open Directly in Browser
1. Simply double-click the `index.html` file to open it in your web browser
2. The app will work immediately - no installation required!

### Option 2: Use a Local Server (Recommended)
1. Open your terminal/command prompt
2. Navigate to the project folder
3. Run a simple HTTP server:
   - **Python 3**: `python -m http.server 8000`
   - **Node.js**: `npx http-server`
   - **PHP**: `php -S localhost:8000`
4. Open your browser and go to `http://localhost:8000`

## 📚 Available Units

### Unit 1: Early Colonial Period (1492-1607)
- **3 Terms**: Maize, Columbian Exchange, Encomienda System
- **Focus**: Early exploration, indigenous cultures, Spanish colonization

### Unit 2: Colonial Development (1607-1754)
- **10 Terms**: Pueblo Revolt, Virginia Company, Frame of Government, Navigation Acts, City Upon a Hill, Ann Hutchinson, King Philip's War, Covenant Chain, Enlightenment, Great Awakening
- **Focus**: English colonies, religious movements, Native American relations

### Unit 3: Road to Revolution (1754-1800)
- **18 Terms**: Salutary Neglect, Plan of Union, French & Indian War, Pontiac's Rebellion, Sons/Daughters of Liberty, Stamp Act, Republican Motherhood, Coercive Acts, Articles of Confederation, NW Ordinance of 1787, Shays' Rebellion, Great Compromise, Federalist Papers, Hamilton's Economic Plan, Jay's Treaty, Washington's Farewell Address, XYZ Affair, Alien & Sedition Acts
- **Focus**: Colonial tensions, revolutionary movements, early republic

### Unit 4: Early Republic (1800-1848)
- **12 Terms**: Market Revolution, Marbury v Madison, American System, Missouri Compromise, Monroe Doctrine, 2nd Great Awakening, Indian Removal Act, Nat Turner Rebellion, Nullification Crisis, Bank War, 2nd American Party System, Seneca Falls Convention
- **Focus**: Economic development, judicial review, territorial expansion

### Unit 5: Antebellum Period (1844-1877)
- **16 Terms**: Manifest Destiny, Mexican American War, Compromise of 1850, Republican Party, Kansas Nebraska Act, Know Nothing Party, Dred Scott Decision, Homestead Act, Emancipation Proclamation, Gettysburg Address, Reconstruction Amendments, Sharecropping, Black Codes/Jim Crow Laws, Compromise of 1877, NAWSA
- **Focus**: Westward expansion, slavery debates, sectional tensions

### Unit 6: Gilded Age (1865-1898)
- **12 Terms**: Gilded Age, Political Machines, Haymarket Riot, The New South, Chinese Exclusion Act, American Federation of Labor, Dawes Severalty Act, Interstate Commerce Commission, Gospel of Wealth, Wounded Knee, Populist Party, Plessy v Ferguson
- **Focus**: Industrialization, political corruption, immigration

### Unit 7: Progressive Era (1890-1945)
- **25 Terms**: Progressive Era, 1st Red Scare, NAACP, Marcus Garvey, Great Migration, Preservationism, Sherman Antitrust Act, Sedition Act, Versailles Treaty, 18th Amendment, 19th Amendment, Scopes Trial, Immigration Acts, Harlem Renaissance, Social Security Act, New Deal Coalition, Lend Lease Act, D-Day, Bracero Program, Code Talkers, Executive Order 9066
- **Focus**: Social reform, civil rights, immigration, World Wars

### Unit 8: Cold War Era (1945-1980)
- **25 Terms**: Truman Doctrine, Marshall Plan, Military Industrial Complex, McCarthyism, GI Bill, Korean War, Vietnam War, Brown v Board of Education, Great Society, Civil Rights Act of 1964, Immigration Acts of 1965, Black Panther Party, Chicano Movement, Stonewall, Environmental Protection Agency, ERA, Watergate, War Powers Act of 1973, Roe v Wade, OPEC, Sunbelt, Moral Majority, Detente
- **Focus**: Cold War, post-war reconstruction, domestic policies

### Unit 9: Modern Era (1980-Present)
- **6 Terms**: Iranian Hostage Crisis, Reaganomics, Strategic Defense Initiative, Operation Desert Storm, NAFTA, War on Terror
- **Focus**: Modern foreign policy, economic policies, contemporary issues

## 🎯 How to Use

1. **Select a Unit**: Choose from the dropdown menu above the controls
2. **Auto-Load**: The unit loads automatically when selected
3. **Study**: Click on cards to flip them and see all historical details
4. **Navigate**: Use Previous/Next buttons or arrow keys
5. **Track Progress**: Monitor your correct/incorrect answers
6. **Shuffle**: Randomize cards for better learning
7. **Reset**: Clear progress when starting over

## ⌨️ Keyboard Shortcuts

- **Spacebar**: Flip the current card
- **Left Arrow**: Previous card
- **Right Arrow**: Next card

## 📱 Mobile Friendly

The app is fully responsive and works great on:
- Desktop computers
- Tablets
- Smartphones

## 💾 Data Storage

- All flashcards and progress are saved locally in your browser
- No data is sent to external servers
- Your study materials remain private
- Unit selection is remembered between sessions

## 🔧 Customization

You can easily customize the app by:
- Modifying `styles.css` for different colors and layouts
- Editing `script.js` for additional features
- Adding new terms to `history-data.js` in the appropriate units
- Adding new functionality to the `FlashcardApp` class

## 🎨 Features in Detail

### Progress Tracking
- Visual progress bar showing current position
- Statistics for correct/incorrect answers
- Accuracy percentage calculation
- Unit-specific progress tracking

### Card Management
- Smooth 3D flip animations
- Automatic progress saving
- Mastered status tracking
- Organized display of all 6 columns

### Study Tools
- Unit-based organization for focused learning
- Shuffle functionality for randomized learning
- Progress reset option
- Success notifications

## 🐛 Troubleshooting

**App not working?**
- Try refreshing the page
- Check that all three files (`index.html`, `styles.css`, `script.js`) are in the same folder
- Use a modern browser (Chrome, Firefox, Safari, Edge)

**Progress not saving?**
- Make sure you're not in incognito/private browsing mode
- Check that your browser allows local storage

**Unit not loading?**
- Make sure you've selected a unit from the dropdown
- Check that the `history-data.js` file is present

## 📚 Study Tips for History

1. **Unit-Based Study**: Focus on one unit at a time for better retention
2. **Chronological Review**: Study units in order to understand cause and effect
3. **Thematic Connections**: Look for connections between different terms and events
4. **Geographic Context**: Pay attention to the "Where" column for spatial understanding
5. **Significance Analysis**: Focus on "Why Significant" to understand historical impact
6. **Active Recall**: Try to recall details before flipping the card
7. **Mix It Up**: Use the shuffle feature to avoid memorizing order

## 🤝 Contributing

Feel free to modify and improve this app for your needs! Some ideas for enhancements:
- Add more terms to existing units
- Create new units for different historical periods
- Implement spaced repetition algorithms
- Add audio pronunciation for terms
- Create export functionality for study notes
- Add different study modes (timeline, geography, etc.)

## 📄 License

This project is open source and available under the MIT License.

---

**Happy History Studying! 🎓📜**
