// Pre-loaded History Flashcards Data organized by Units
const HISTORY_UNITS = {
    "Unit 1: Early Colonial Period (1492-1607)": [
        {
            term: "Maize",
            who: "Aztecs, Maya, Pueblo, other indigenous groups",
            what: "Corn, often grown with beans and squash (\"Three Sisters\"), provided a reliable food source and supported agricultural societies.",
            where: "First domesticated in Mexico; spread to the American Southwest and beyond",
            when: "6000 BCE - Today",
            whySignificant: "Allowed Native peoples to transition from nomadic hunting to settled farming villages, leading to population growth, social complexity (art), and the rise of advanced civilizations."
        },
        {
            term: "Columbian Exchange",
            who: "Europeans, Indigenous peoples",
            what: "The transfer of plants, animals, people, goods, and diseases between Europe, Africa, and the Americas after 1492.",
            where: "Europe, Americas",
            when: "1492- 1500s",
            whySignificant: "Introduced new crops (corn, potatoes) that boosted European populations, brought deadly diseases (smallpox) that devastated Indigenous peoples, and fueled demand for enslaved African labor for plantations."
        },
        {
            term: "Encomienda System",
            who: "Spanish colonists, Indigenous peoples, Las Casas (critic)",
            what: "A Spanish labor system granting colonists control over Indigenous land and forced labor in exchange for promises to protect and Christianize them.",
            where: "Spanish colonies",
            when: "1512 -1542",
            whySignificant: "Led to exploitation, violence, and population decline among Native peoples. Sparked debates about Indigenous rights and contributed to the creation of the New Laws of 1542, which attempted to end the system."
        }
    ],
    
    "Unit 2: Colonial Development (1607-1754)": [
        {
            term: "Pueblo Revolt",
            who: "Pueblo Indians led by Popé, Spanish settlers and priests",
            what: "Uprising against Spanish rule that killed 400 colonists, destroyed churches, and drove 2,000 settlers out of the region.",
            where: "American SW",
            when: "1680",
            whySignificant: "The most successful Native American revolt against Europeans in North America. Temporarily forced the Spanish out and restored traditional Pueblo religion and culture until reconquest in 1692."
        },
        {
            term: "Virginia Company",
            who: "English investors, settlers at Jamestown",
            what: "A joint-stock company created to establish a profitable colony in North America. Founded Jamestown, the first permanent English colony.",
            where: "Jamestown, Virginia",
            when: "1607",
            whySignificant: "Marked the beginning of permanent English settlement. Its charter granted settlers some self-governance, setting an early precedent for representative government in the colonies."
        },
        {
            term: "Frame of Gov't",
            who: "William Penn and Pennsylvania colonists",
            what: "A written constitution for Pennsylvania that promoted religious tolerance, fair treatment of Native Americans, and representative self-government.",
            where: "Pennsylvania",
            when: "1682",
            whySignificant: "Reflected Penn's Quaker ideals and Enlightenment thought. Established religious freedom, civil rights protections, and self-rule, making Pennsylvania a model of tolerance and diversity."
        },
        {
            term: "Navigation Acts",
            who: "British Parliament, colonial merchants, colonists",
            what: "Laws restricting colonial trade to English ships and requiring certain \"enumerated goods\" (like tobacco, sugar, rice) to be shipped only to England.",
            where: "British colonies",
            when: "1651 (enforced through 1700s)",
            whySignificant: "Reflected the policy of mercantilism, ensuring England profited from colonial trade. Colonists benefited under \"salutary neglect,\" but later resented strict enforcement, fueling tensions before the Revolution."
        },
        {
            term: "City Upon a Hill",
            who: "John Winthrop and Puritan colonists",
            what: "A sermon on the ship Arbella describing the Massachusetts Bay Colony as a model Christian community watched by the world.",
            where: "Boston (Harbor), Mass",
            when: "1630",
            whySignificant: "Symbolized the idea of American exceptionalism. Religion was central to colonial identity, and the phrase was later invoked by leaders to express America's mission and values."
        },
        {
            term: "Ann Hutchinson",
            who: "Ann Hutchinson",
            what: "Puritan banished from Mass Bay Colony for heresy in 1637. She preached the idea that God communicated directly to individuals instead of through the church elders. Real issue was gender roles not religious heresy.",
            where: "Mass Bay Colony",
            when: "1637",
            whySignificant: "Challenged colonial gender roles and Church authority. Led to foundation of more tolerant colonies like Rhode Island (founded by Roger Williams). Ideas contributed to foundational beliefs in Constitution of separation of Church and State."
        },
        {
            term: "King Philip's War",
            who: "British, NAI led by Metacom",
            what: "War over land encroachment by British colonists",
            where: "New England",
            when: "1675- 1676",
            whySignificant: "Destroys power of the tribes. Continual disputes will be over land. Most destructive war in US History in regard to population."
        },
        {
            term: "Covenant Chain",
            who: "Iroquois Confederacy",
            what: "Alliance & trade agreement that gave Iroquois tribal supremacy & NY favorable trading terms",
            where: "New York",
            when: "1677",
            whySignificant: "Established advantage for both: iroquois over other tribes, NY over other colonies. Shows agency of NAI using European powers for their own ends."
        },
        {
            term: "Enlightenment",
            who: "Locke, Montesquieu, Rousseau, etc",
            what: "Intellectual movement thinkers tried to apply principles of reason & methods of science to all of society",
            where: "Europe, spread to colonies",
            when: "1600s- 1700s",
            whySignificant: "Widespread ideas that were separate from religion. Influenced American political leaders & documents: Dec of I, Constitution, Bill of Rights. Basis of Republicanism & Amer Rev."
        },
        {
            term: "Great Awakening",
            who: "George Whitefield, John Edward, young people",
            what: "Religious movement that emphasized emotional aspects of religion",
            where: "Northern colonies, spread south",
            when: "1730s- 1760s",
            whySignificant: "Opposite the spread of Enligh ideas. 1st national movement. Questioning authority, slaves first intro to Christianity"
        }
    ],
    
    "Unit 3: Road to Revolution (1754-1800)": [
        {
            term: "Salutary Neglect",
            who: "British, Colonists",
            what: "British Policy under which trade regulations for the colonies were laxly enforced and supervision of colonial affairs was loose as long as the colonies remained loyal to the British and contributed to its economic profitability.",
            where: "North American colonies",
            when: "1700 - 1763",
            whySignificant: "Salutary neglect contributed involuntarily to the increasing autonomy of colonial legal and legislative institutions, which ultimately led to American independence."
        },
        {
            term: "Plan of Union",
            who: "Ben Franklin, NAI (Iroquois), Albany Congress Reps",
            what: "BF attempted to pass plan of intercolonial cooperation about defense, Plan that was initially favored but shot down b/c fears of loss of power",
            where: "Albany, NY",
            when: "1754",
            whySignificant: "Showed diverse interests + sectionalism, not unified"
        },
        {
            term: "French & Indian War",
            who: "Colonists, NAI, France, GB",
            what: "Conflict over Ohio River Valley, resulted in loss of French power in NA",
            where: "Ohio River Valley",
            when: "1754- 1763",
            whySignificant: "End of French power, some colonial unity, british debt, nai lose option play the powers off each other, lots of shifting property"
        },
        {
            term: "Pontiac's Rebellion",
            who: "Pontiac + NAI confederacy, American colonists, British",
            what: "Ottowa Chief, Pontiac, led an uprising in the wake of the French + Indian War to oppose British expansion into W. Ohio Valley. Led to the Proclamation of 1763. Fort Pitt: use of smallpox blankets against NAI forces.",
            where: "Great Lakes Region, Michigan",
            when: "1763",
            whySignificant: "Showcases the difference in NAI relations b/w English vs French. Loss of agency. Demonstrated viability of NAI alliances in struggle against European expansion & contributed to deteriorating relations b/w GB + colonies. Leads to formation of vigilante groups (Paxton Boys)"
        },
        {
            term: "Sons, Daughters of Liberty",
            who: "American Colonists",
            what: "Sons used threats, protests, and acts of violence to intimidate those loyal to the British crown, and make their grievances clear to the British. They helped organize and carry out the Boston Tea Party. Daughters bolstered the cause by staging boycotts and producing homemade versions of products affected by non-importation.",
            where: "American Colonies",
            when: "1765 - 1776",
            whySignificant: "Sons and Daughters of Liberty were influential in orchestrating effective resistance movements against British rule in colonial America on the eve of the Revolution, primarily against what they perceived as unfair taxation and financial limitations imposed upon them."
        },
        {
            term: "Stamp Act",
            who: "Parliament, Sons of Liberty, Colonists",
            what: "Taxes stamped, legal documents, and paper products. Affected all colonists (not just merchants)",
            where: "Colonies, GB, Boston",
            when: "1765",
            whySignificant: "To raise revenue + pay off debt accumulated for F+ I war, americans use non-importation to hurt Brittain, act repealed in 1766 along w/ passing of Declaratory act, tensions, taxation without representation"
        },
        {
            term: "Republican Motherhood",
            who: "Women",
            what: "Idea that women are the educators of the next generation, must live according to certain rules and ideals",
            where: "US",
            when: "1770-1830s",
            whySignificant: "Assigned gender roles, mothers had a civic duty in society, separate spheres, men = public, women = private"
        },
        {
            term: "Coercive Acts",
            who: "Parliament, Colonists",
            what: "Series of acts that unneces strain on colonists, like quartering act, admin of justice act, etc.",
            where: "Colonies",
            when: "1774",
            whySignificant: "To punish colonies especially Boston after Tea Party, confirms fears that GB wants to destroy American Liberty"
        },
        {
            term: "Articles of Confederation",
            who: "Delegates at Cont. Congress",
            what: "Confederal system, very little power vested in fed gov't",
            where: "Colonies, US",
            when: "1777-1789",
            whySignificant: "Unstable due to confederal system, (federal power very limited can't tax), shay's rebellion proves this"
        },
        {
            term: "NW Ordinance of 1787",
            who: "Congress",
            what: "Legislation outlining gov't in NW territory including how to enter union, outlawing slavery, paired with Land Ord. of 1785",
            where: "Territory NW of Ohio",
            when: "1787",
            whySignificant: "One key success of A of C, gave equal standing to new states"
        },
        {
            term: "Shays' Rebellion",
            who: "Daniel Shays, indebted farmers",
            what: "Armed march to courthouse attempting to shut down debtors prison",
            where: "Mass.",
            when: "1787",
            whySignificant: "Country in depression due to inflation, induced by over printing of money, showed inability of gov't formed by A o C to deal with crises, lead to constitutional convention"
        },
        {
            term: "Great Compromise",
            who: "Congress: small states vs big states, Madison",
            what: "Bicameral legislature, compromise between VA, NJ plans",
            where: "US",
            when: "1787",
            whySignificant: "Compromise between big and small states, North and South, commerce + slavery"
        },
        {
            term: "Federalist Papers",
            who: "Hamilton, Madison, Jay",
            what: "Collection of essays that supported ratification of the constitution",
            where: "US",
            when: "1788",
            whySignificant: "Division between federalists and anti-federalists, addressed fears about constitution, said it would strengthen government + preserve natural rights"
        },
        {
            term: "Hamilton's Economic Plan",
            who: "Hamilton, G Washington",
            what: "Set of measures: Assumption of states + federal debt, Establish a national bank, Encourage manufacturing in the US",
            where: "US",
            when: "1790",
            whySignificant: "Foundation of strong role of federal government in economy"
        },
        {
            term: "Jay's Treaty",
            who: "British Gov't, US Gov't",
            what: "GB to withdraw all ships from US territory dual \"most favored nation\" status, opposed by Jeffersonians",
            where: "US",
            when: "1794",
            whySignificant: "To avert war over British seizure of US ships required passage of Pinckney treaty w/ Spanish (US gets navigation rights to Mississippi Riv) to appease Jeffersonians"
        },
        {
            term: "Washington's Farewell Address",
            who: "George Washington",
            what: "Letter written by GW at end of 2nd term, preservation of union, danger of factions, and us should trade w/ foreign countries but avoid political connections and alliances",
            where: "US",
            when: "1796",
            whySignificant: "Influenced US foreign policy until end of 19th century"
        },
        {
            term: "XYZ Affair",
            who: "John Adams, American and French Diplomats",
            what: "Caused by Jay's Treaty. American peace delegation in France, three agents of the French Foreign Minister (labeled as X, Y, and Z in Adams' communications with Congress), and the French Foreign Minister's demand for a bribe from US.",
            where: "United States, France",
            when: "1797-8",
            whySignificant: "Resulted in a limited, undeclared war known to the Quasi-War. Raised anti-French sentiment which caused the passage of the Alien and Sedition Acts and the establishment of Department of the Navy to oversee naval affairs."
        },
        {
            term: "Alien & Sedition Acts",
            who: "Congress, Adams, Jefferson",
            what: "4 acts passed by congress, curtailed freedom of press + immigrants and foreigners",
            where: "US",
            when: "1798",
            whySignificant: "Suppression of civil liberties, an attempt by the federalists to defeat Jeffersonians"
        }
    ],
    
    "Unit 4: Early Republic (1800-1848)": [
        {
            term: "Market Revolution",
            who: "Entrepreneurs, Slater (textile mills)",
            what: "Rapid development in transportation, commercialization and industrialization",
            where: "US, especially in North (Lowell)",
            when: "1800-1840",
            whySignificant: "Industrial regionalization, (North vs south) shift towards paid labor, factory work, and more opportunity for women in industrial workforce"
        },
        {
            term: "Marbury v Madison",
            who: "Marbury, Madison, Marshall",
            what: "Midnight judges instated by Adams, Madison CTJ (sec of state) tries to remove, Marbury sues",
            where: "US",
            when: "1803",
            whySignificant: "Established role of supreme court, judicial review courts have duty to say what law is but cannot enforce it"
        },
        {
            term: "American System",
            who: "Henry Clay, Madison",
            what: "Bank, tariff, internal improvements (roads, canals).",
            where: "US",
            when: "1816 - 1830",
            whySignificant: "Gov't sponsored economic development, est new industries, reduce dependence on foreign made goods. Leads to Market Revolution"
        },
        {
            term: "Missouri Compromise",
            who: "Slave states, free states",
            what: "Missouri added as a slave state, Maine as free state, 36'30 line established by congress dictates states of slavery added in the future",
            where: "US, Missouri, Maine 36'30 line",
            when: "1820",
            whySignificant: "Senate stayed balanced between free states and slave states"
        },
        {
            term: "Monroe Doctrine",
            who: "John Quincy Adams, Monroe",
            what: "Statement issued saying that western hemisphere was closed off to further colonization",
            where: "US",
            when: "1823",
            whySignificant: "Could not enforce, Britain would have to. \"Big bark from small dog\""
        },
        {
            term: "2nd Great Awakening",
            who: "Finney & Cartwright (preachers), Enslaved people",
            what: "Religious revival starts in Burned Out District of New York and spread south amongst slaves and white southerners. Leads to new Protestant sects.",
            where: "South",
            when: "1790s- 1830s",
            whySignificant: "Democratized Christianity. Created a distinctly African American brand of christianity, used by slave owners to control slaves; enslaved people heard messages of liberation and equality"
        },
        {
            term: "Indian Removal Act",
            who: "Jackson, congress, Southern Civilized tribes",
            what: "Money to relocate tribes by force if necessary",
            where: "Georgia Alabama, Mississippi, Florida → Oklahoma",
            when: "1830",
            whySignificant: "NAI who assimilated were not free from this, AJ ignores 2 supreme court cases that said Cherokees were \"domestic dependent nations.\" Results in Trail of Tears."
        },
        {
            term: "Nat Turner Rebellion",
            who: "Nat Turner",
            what: "An armed rebellion of enslaved people, led by Nat Turner",
            where: "Virginia",
            when: "1831",
            whySignificant: "Ultimately unsuccessful. Turner was executed. Organized emancipation efforts dwindled and harsher punishments were instituted toward enslaved peoples."
        },
        {
            term: "Nullification Crisis",
            who: "South Carolina, Jackson",
            what: "SC responds negatively to the Tariff of 1832 and nullifies it within their borders, Jackson issues Force Bill. Eventually compromise reached with Tariff of 1833, SC ends nullification but nullifies Force Bill to spite Jackson",
            where: "SC",
            when: "1832-1833",
            whySignificant: "States rights, economic downturn, Compromise possible because of Henry Clay. Avoidance of Civil War as a result."
        },
        {
            term: "Bank War",
            who: "Jackson, Biddle",
            what: "Jackson opposed the renewal of the bank charter, vetoed recharter of bank, defeats Biddle",
            where: "US",
            when: "1832",
            whySignificant: "Effective end of American system, led to the formation of the Whigs who were opposed of Jackson. No Nat'l Bank until 1913."
        },
        {
            term: "2nd American Party System",
            who: "AJ, Clay, Democrats, Whigs",
            what: "Term used to describe party system during Jacksonian era",
            where: "US",
            when: "1828- 1854",
            whySignificant: "Reflected and shaped political, social, and cultural attitudes during Jacksonian era"
        },
        {
            term: "Seneca Falls Convention",
            who: "Women, Mott, Stanton",
            what: "Women's rights convention advocating for more rights for women (suffrage NOT a huge focus)",
            where: "Seneca Falls, NY",
            when: "1848",
            whySignificant: "1st women's rights convention, resulted in declaration of sentiments, part of national reform community response to market revolution"
        }
    ],
    
    "Unit 5: Antebellum Period (1844-1877)": [
        {
            term: "Manifest Destiny",
            who: "American Settlers, O'sullivan",
            what: "Idea that said americans were destined to expand from coast to coast",
            where: "West",
            when: "1845- 1900",
            whySignificant: "Justified aggressive expansion, NAI removal, sparked war with mexico"
        },
        {
            term: "Mexican American War",
            who: "Pres. Polk, US military, Mexican military",
            what: "War between Mexico and US, resolved by treaty of Guadelupe Hidalgo: Mexico cedes CA and NM, Rio grande becomes border between Texas and Mexico, US pays 15 mil for SW",
            where: "NM, CA, TX",
            when: "1846-1848",
            whySignificant: "Politically divisive, set precedent for territorial acquisitions, reignites slavery debate with Wilmot Proviso."
        },
        {
            term: "Compromise of 1850",
            who: "Henry Clay, Calhoun, Daniel Webster",
            what: "Negotiated as last attempt to settle issue of slavery. 1 CA becomes a free state, 2 NM and UT vote on slavery, 3 Slave trades end in DC, 4 Stricter Fugitive slave Laws, 5 TX gives up land claims",
            where: "Western territories",
            when: "1850",
            whySignificant: "Last peaceful resolution of disagreement between north and south, shows compromise is still possible"
        },
        {
            term: "Republican Party",
            who: "Republicans, mostly those that used to be whigs",
            what: "New political party, aftermath of whigs, free soil platform",
            where: "NE",
            when: "1854",
            whySignificant: "Became one of the two big parties, still today, ideology during this time is more aligned with modern democrats"
        },
        {
            term: "Kansas Nebraska Act",
            who: "Stephen Douglas, Calhoun, Clay, Webster",
            what: "Propose opening northern indian territory (KS, NE) allowing their position on slavery to be decided based on popular sovereignty",
            where: "Kansas, Nebraska",
            when: "1854",
            whySignificant: "Impetus for bleeding kansas and Lecompton constitution, overwrites Missouri compromise by permitting slavery above Mason Dixon line."
        },
        {
            term: "Know Nothing Party",
            who: "Whigs, disaffected Northern democrats",
            what: "The American party. Based on nativism: anti-catholic, anti-irish, participates in Bloody Kansas, later split because of slavery issue, many go to Republican party",
            where: "US",
            when: "1854",
            whySignificant: "Shows intense nativism, anti-immigrant sentiment after increased immigration of the 40s and 50s"
        },
        {
            term: "Dred Scott Decision",
            who: "Dred Scott, Justice Taney",
            what: "Said slaves not citizens, but property. Missouri comp declared unconstitutional, slaves cannot sue.",
            where: "Supreme Court",
            when: "1857",
            whySignificant: "Heightens tensions, North is fearful"
        },
        {
            term: "Homestead Act",
            who: "Republican Congress, Lincoln",
            what: "Congressional act by congress, giving land sales in the West. Could get 160 acres for a small fee, promise to improve land in some ways",
            where: "US, West",
            when: "1862",
            whySignificant: "Large impetus for western expansion, example of legislation probably only because of the lack of southern representation"
        },
        {
            term: "Emancipation Proclamation",
            who: "Lincoln, Confederate states",
            what: "Abe's threat to the confederate that he would free all slaves in states still in rebellion on Jan 1st,1863. Freed slaves where he didn't have jurisdiction, kept them slaves where he could have freed them",
            where: "US confederacy",
            when: "1862",
            whySignificant: "Precursor to 13th amendment, focused civil war more on slavery issue"
        },
        {
            term: "Gettysburg Address",
            who: "Lincoln",
            what: "At a dedication ceremony for the Gettysburg ceremony and to honor those who died at Gettysburg, Lincoln gives speech to rally morale in the Union to preserve the union and its freedoms",
            where: "Gettysburg, PA",
            when: "1863",
            whySignificant: "First time Lincoln connects the Civil war to the fight for freedom and equality, rather than simply a fight to preserve union. Invokes connections to the Dec of Independence and that \"all men are created equal\""
        },
        {
            term: "Reconstruction Amendments",
            who: "Radical republicans, former slaves",
            what: "13-15th amendments: slavery, citizenship, voting. Conflict between congressional and pres reconstruction",
            where: "Southern states: opposed by women",
            when: "Ratified 1865, 1868, 1870",
            whySignificant: "Accomplished immediate goal of reconstruction (rights + reunification) federal protection of rights for African Americans"
        },
        {
            term: "Sharecropping",
            who: "Freed slaves, southern landowners",
            what: "System of farming which owned by a white person, paid for the land, in some percentages of the goods produced",
            where: "South",
            when: "Late 1860s -1940s",
            whySignificant: "Allowed further oppression of the officially enfranchised freedmen, predominant farming system in post civil war south"
        },
        {
            term: "Black Codes/ Jim Crow Laws",
            who: "African Americans, local governments",
            what: "State and local laws legalizing segregation throughout the US",
            where: "US",
            when: "1880s - 1968",
            whySignificant: "Upheld and enforced a system of white supremacy and entrenched racism in the structures of society"
        },
        {
            term: "Compromise of 1877",
            who: "Rutherford B Hayes, congress, south",
            what: "Compromise ending the contested election of 1877 by placing Republican Hayes in office but removing oppressive Northern military influence in South",
            where: "South",
            when: "1877",
            whySignificant: "Formally ended military reconstruction of the south, hinted at the end of republican national dominance"
        },
        {
            term: "NAWSA",
            who: "Carrie Chapman Catt, Susan B Anthony, Elizabeth Cady Stanton",
            what: "Nat'l American Women's Suffrage association was a result of the merging of 2 opposing suffrage factions. They worked on both a state by state campaign and a Constitutional Amendment to grant women the vote.",
            where: "Washington DC",
            when: "1890 - 1920",
            whySignificant: "Along with other groups like the Nat'l Women's Party, they were successful at getting the 19th amendment passed in 1920 but were a segregated movement especially after the 15th Amendment."
        }
    ],
    
    "Unit 6: Gilded Age (1865-1898)": [
        {
            term: "Gilded Age",
            who: "Mark Twain, upper class",
            what: "Conspicuous consumption, displays of wealth, idolatry of a lavish lifestyle",
            where: "US",
            when: "Late 19th Century",
            whySignificant: "Evidence of shifting morality, excesses of 2nd industrial Revolution."
        },
        {
            term: "Political Machines",
            who: "Boss Tweed, Thomas Nast",
            what: "Corrupt political entities like Tammany Hall controlled by a boss that wielded immense power over local/state politics. Controlled tax rates, exchanged favors/votes for jobs especially for immigrants",
            where: "NY, Chicago, Philadelphia",
            when: "1830s- 1930",
            whySignificant: "Thrived off kickbacks and bribes from businesses. Fraud, political domination and graft in the Gilded Age. Made it difficult for good, qualified people to break into political office (Teddy Roosevelt). Stole millions from taxpayers. Later faced scrutiny from critics like Nast and Pendleton Act of 1883."
        },
        {
            term: "Haymarket Riot",
            who: "Knights of Labor",
            what: "Peaceful protest (workers had been killed, injured by Chicago police previously) for labor rights in Chicago that turned violent when a bomb was thrown at police.",
            where: "Chicago",
            when: "May 4, 1886",
            whySignificant: "Associates the labor movement with anarchy, violence, and radicalism. Major setback for unions."
        },
        {
            term: "The New South",
            who: "Former Confederacy, American South",
            what: "Term that described new social/political/economic systems in the South post Civil War in an attempt to rebuild the South - industrialize, modernize",
            where: "South",
            when: "1877",
            whySignificant: "South was primarily slave based economy and had to figure out how to create a new way to create revenue. Not very successful. Share cropping, segregation continues."
        },
        {
            term: "Chinese Exclusion Act",
            who: "Congress, Chinese Immigrants",
            what: "Act ending immigration from China for 10 years forbidding naturalization",
            where: "US",
            when: "1882",
            whySignificant: "Nativism, dislike for cheap Chinese labor available as a result of immigration."
        },
        {
            term: "American Federation of Labor",
            who: "Samuel Gompers, skilled white male workers",
            what: "Union bargained w/ management for better wages, conditions & hours. Organized along craft lines",
            where: "US",
            when: "1886",
            whySignificant: "Use of collective bargaining = effective as an exclusive union."
        },
        {
            term: "Dawes Severalty Act",
            who: "Congress, NAI",
            what: "Act ending tribal ownership of lands, allocating some to NAI, gov't selling the rest. Forced integration into white culture",
            where: "US",
            when: "1887",
            whySignificant: "Undermined the NAI tribal structure and destroyed their way of life"
        },
        {
            term: "Interstate Commerce Commission (ICC)",
            who: "Congress",
            what: "Agency created to regulate the RR industry to ensure fair rates, eliminate rate discrimination. 5 member commission appt by president",
            where: "US",
            when: "1887",
            whySignificant: "Shift in power from state to federal. 1st independent regulatory body, 1st agency to regulate big business"
        },
        {
            term: "Gospel of Wealth",
            who: "Andrew Carnegie",
            what: "Article that said rich had duty to be charitable, establish libraries, museums, colleges.",
            where: "US",
            when: "1889",
            whySignificant: "Called into question duty of rich people. Advocated individual philanthropy similar to idea of trickle down economics."
        },
        {
            term: "Wounded Knee",
            who: "Sitting Bull",
            what: "Began with the attempted arrest of Sitting Bull (killed in the process) in response to the Ghost Dance movement. Resulted in massacre left 150 Lakota Sioux dead",
            where: "Pine Ridge Reservation, S. Dakota",
            when: "1890",
            whySignificant: "Last major armed conflict between Lakota Sioux and the US Army; the end of NAI resistance in the Plains. ⅓ of all dead at Wounded Knee were women, children. Will hasten the cultural genocide of Native Tribes forced onto reservations using practices of forced assimilation."
        },
        {
            term: "Populist Party",
            who: "WJ Bryan, farmers",
            what: "Gov't ownership of RR, bank, telegraph, graduated income tax, 8 hour workday, subtreasuries, free Silver. Bryan both the Democrat & Populist candidate",
            where: "Western states",
            when: "1896",
            whySignificant: "Farmers involved in politics"
        },
        {
            term: "Plessy v Ferguson",
            who: "Supreme Court, African Americans",
            what: "Ruling legitimized concept of separate yet equal",
            where: "US",
            when: "1896",
            whySignificant: "Separate but equal legitimized until Plessy was overturned in Brown v Board."
        }
    ],
    
    "Unit 7: Progressive Era (1890-1945)": [
        {
            term: "Progressive Era",
            who: "Women, Middle class reformers",
            what: "Broad movement towards social consciousness after the changes the Civil War & industrialization brought",
            where: "Nat'l mvt; US",
            when: "1900- 1917",
            whySignificant: "Unified, empowered many reformists. Brought out tension b/w social justice & social control (temperance)"
        },
        {
            term: "1st Red Scare",
            who: "Palmer, Communists",
            what: "Hysteria over the threat of communism in the US after Bolshevik Rev in Russia.",
            where: "US",
            when: "1917 - 1920",
            whySignificant: "Leads to many in federal gov't being scrutinized for perceived affiliations with communists or radicals. Often targeted labor unions. Sedition Act targets those who criticize the government. Fear and hysteria continue into the 1940s and 50s."
        },
        {
            term: "NAACP",
            who: "African American activists, WEB Du Bois",
            what: "Formed in NY by white + black activists in response to race riots, lynchings. Strove for racial equality on nat'l level. Focuses on voting & legal rights, education & employment opportunities.",
            where: "National movement",
            when: "1909- today",
            whySignificant: "One of the most effective & influential organizations fighting for racial equality. Major influence on the Civil Rights Movement of the 1950s, Identity Movements of the 1960s up to modern day."
        },
        {
            term: "Marcus Garvey",
            who: "Garvey, African Americans, UNIA",
            what: "Black nationalist and leader of the Pan African movement who disagreed with the integration & accommodationist views of mainstream African American movements.",
            where: "Liberia, NY",
            when: "1887 - 1940",
            whySignificant: "Advocated for \"separate but equal\" status for black Americans and pushed for a return to Africa. While the NAACP and many black leaders in America disagreed with his stance, he is credited for advocating for black pride and nationalism (\"Black is beautiful\"). Influenced black power movement in the 1960s, 70s."
        },
        {
            term: "Great Migration",
            who: "Southern Blacks",
            what: "Demographic shift, blacks move north for work. 500,000 +. Escape racial violence.",
            where: "Rural south to N. cities (Chicago, Detroit)",
            when: "1914- 1920",
            whySignificant: "Increased northern black population leading to racial tension & violence"
        },
        {
            term: "Preservationism",
            who: "John Muir, Gifford Pinchot, T.R.",
            what: "Environmental policy, conservationist v preservationist",
            where: "Nat'l mvt",
            when: "1870s- 1905",
            whySignificant: "Issues at center of every major environmental debate like Hetch Hetchy"
        },
        {
            term: "Sherman Antitrust Act",
            who: "Congress, T.R.",
            what: "Allowed gov't to break up large trusts, monopolies to regulate industry.",
            where: "US",
            when: "1890",
            whySignificant: "Initially used on unions until T.R. Gives gov't direct role in economy and power to breakup big business/monopolies and protect interest of people/consumers"
        },
        {
            term: "Sedition Act",
            who: "Eugene Debs, US gov't",
            what: "Amendment to Espionage Act allowing gov't to go after anyone criticizing US policies, radicals, draft, socialists. Upheld by Supreme Court.",
            where: "US",
            when: "1918",
            whySignificant: "Increased federal control during WWI, limiting freedom of speech"
        },
        {
            term: "Versailles Treaty",
            who: "Wilson, European Reps",
            what: "Treaty ending WWI, centered around 14 points and League of Nations. Fails to win approval from congress because of loss of autonomy with league",
            where: "Versailles, International",
            when: "1918",
            whySignificant: "Ended wwi, showed isolationist strength at end of war, sets stage for WW2"
        },
        {
            term: "18th Amendment",
            who: "Congress, Wilson",
            what: "Amendment banning alcohol, aka \"Prohibition\"",
            where: "US",
            when: "Jan 1920",
            whySignificant: "Bans alcohol nationwide, hard to enforce, rise of speakeasies and organized crime, repealed in 1933 with the 21st amendment"
        },
        {
            term: "19th Amendment",
            who: "Congress, Wilson, Alice Paul, Stanton, Susan B Anthony",
            what: "Amendment giving vote to women",
            where: "1920",
            when: "1920",
            whySignificant: "Culmination of women's suffrage movement, win for feminists"
        },
        {
            term: "Scopes Trial",
            who: "John Scopes, Clarence Darrow, WJB",
            what: "HS teacher violates Butler Act which prohibited teaching of evolution",
            where: "Dayton, TN",
            when: "1925",
            whySignificant: "Continued debate of separation of church and state, highlights evangelical Christianity importance in South."
        },
        {
            term: "Immigration Acts",
            who: "Immigrants",
            what: "Law limiting immigration by region based on 1910 census",
            where: "US",
            when: "1921",
            whySignificant: "Designed to limit immigration of those from S+ E europe, shows xenophobia, racism, nationalism of US"
        },
        {
            term: "Harlem Renaissance",
            who: "Black artists: Langston Hughes, Hurston",
            what: "Cultural movement coming out of Harlem that encouraged African Americans to embrace and cherish their unique culture and identity. Produced famous writers, artists, musicians",
            where: "Harlem, NY",
            when: "1920-1930",
            whySignificant: "Promoted black identity and produced culturally important works, people. Brings African American art into the mainstream of American culture."
        },
        {
            term: "Social Security Act",
            who: "FDR, Congress",
            what: "Act that gave benefits to people like the elderly, unemployed, dependent mothers",
            where: "US",
            when: "1935",
            whySignificant: "Established a social safety net, critiqued by conservatives as overstepping limits of federal government"
        },
        {
            term: "New Deal Coalition",
            who: "Women, workers trade unions, poor farmers, African Americans, Catholics, Jews",
            what: "Political coalition that wanted more active government involvement in dealing with GD.",
            where: "US",
            when: "1930s",
            whySignificant: "Promoted big government that resulted in many large long lasting programs, allowed FDR to push his agenda"
        },
        {
            term: "Lend Lease Act",
            who: "US, Britain",
            what: "Provides military aid to any country whose security deemed vital to US security. Military aid to GB with understanding US would be paid back.",
            where: "US/Britain",
            when: "1941",
            whySignificant: "Furthers US involvement in growing global struggle on side with Allies (France, GB)"
        },
        {
            term: "D-Day",
            who: "US, Britain, and other Allied powers",
            what: "Invasion of Normandy (France) for Allies to fight Nazis. US victory, beginning of the end of Germany",
            where: "France",
            when: "June 6, 1944",
            whySignificant: "Turning point where US truly enters war in Europe. Important to allied victory, begins German retreat."
        },
        {
            term: "Bracero Program",
            who: "Mexican workers",
            what: "Agreements between the US and Mexico to allow Mexican men to come to the US for work (mostly agricultural work)",
            where: "US and Mexico",
            when: "1942 - 1964",
            whySignificant: "Largest US contract labor system ever (employed 4 million workers over its duration). Wages were low and led to advocacy from many groups for changes to the treatment for farm workers, including Chavez/Huerta and the United Farm Workers."
        },
        {
            term: "Code Talkers",
            who: "Navajo (and other tribes), US military",
            what: "Navajo Marines who conveyed messages in Navajo code that was unbreakable by the Axis powers in WWII",
            where: "Pacific theater",
            when: "1940 - 1945",
            whySignificant: "Provided fast and secure line of communication on the front lines of WWII. One of the only codes not broken during the war, which led to the recruitment of 400 Navajo men."
        },
        {
            term: "Executive Order 9066",
            who: "FDR, Issei, Nisei",
            what: "Isolated Japanese americans on west coast in internment camps, upheld in Korematsu v US (1944)",
            where: "UT, CO, AZ, ID, WY, OR, WA, CA",
            when: "Feb 19, 1942",
            whySignificant: "Constitutional rights violated in time of war, reparations in 1988"
        }
    ],
    
    "Unit 8: Cold War Era (1945-1980)": [
        {
            term: "Truman Doctrine",
            who: "Truman, GB, Turkey, Greece",
            what: "GB couldn't fund anti-commie side in Turkish civil war. $400 million to Turkey and Greece to keep commies from winning",
            where: "Turkey, Greece",
            when: "1947",
            whySignificant: "Asserted us right to intervene to save other countries from communism containment"
        },
        {
            term: "Marshall Plan",
            who: "George Marshall",
            what: "European recovery program. Prevent socialism from getting foothold in western europe. Protect markets for us",
            where: "Europe",
            when: "1947",
            whySignificant: "Deepens wedge between US and USSR containment"
        },
        {
            term: "Military Industrial Complex",
            who: "Ike, US gov't army, defense contractors",
            what: "Policies monetary relations between us gov't, DoD and defense industries",
            where: "US",
            when: "1961",
            whySignificant: "Ike warned US about this, we have high defense spending, funnels money towards military"
        },
        {
            term: "McCarthyism",
            who: "Joe McCarthy, HUAC, congress",
            what: "Red scare. Investigation into hysteria about subversives in federal government, used to target individuals groups for being \"un american\" Hollywood 10, Hiss",
            where: "US",
            when: "1950s",
            whySignificant: "Intended to silence critics of the cold war; liberals"
        },
        {
            term: "GI Bill",
            who: "Congress, veterans",
            what: "Law providing benefits to ww2 vets: low cost mortgages, low interest loans for business, cash for tuition",
            where: "US",
            when: "1944",
            whySignificant: "Another example of government paying for people to attain success, boosts people into the middle class."
        },
        {
            term: "Korean War",
            who: "Truman",
            what: "A proxy war between the US and USSR in Korea. No \"winner,\" and essentially no change in borders due to the war",
            where: "US",
            when: "1944",
            whySignificant: "Demonstrates the Truman doctrine at work attempting to contain communism"
        },
        {
            term: "Vietnam War",
            who: "Ho Chi Minh, Kennedy, Johnson, Nixon",
            what: "A long proxy war fought between North (communist) and South Vietnam.",
            where: "Vietnam",
            when: "1955-1975",
            whySignificant: "It helped seriously spark anti-war movements and led to increased questioning of the government in the US"
        },
        {
            term: "Brown V Board of Education",
            who: "Oliver Brown, Earl Warren",
            what: "The supreme court ruling that ruled segregation in public schools, and by extension the doctrine of \"separate yet equal\" unconstitutional. Overturned Plessy v. Ferguson",
            where: "US",
            when: "1954",
            whySignificant: "The ruling overturned Plessy v. Ferguson and represented a first success of the Civil Rights Movement. It paved the way for later Civil Rights reforms and demonstrates the activism of the Warren court"
        },
        {
            term: "Great Society",
            who: "Lyndon B. Johnson",
            what: "Ambitious series of policy initiatives, legislation and programs spearheaded by President Lyndon B. Johnson with the main goals of ending poverty, reducing crime, abolishing inequality and improving the environment.",
            where: "United States",
            when: "1964",
            whySignificant: "Launched new major domestic programs. Major achievements include the Civil Rights Act, Voting Rights Act, Immigration and Nationality Act of 1965, and the establishment of Medicare and Medicaid."
        },
        {
            term: "Civil Rights Act of 1964",
            who: "Lyndon Baines Johnson",
            what: "Legislation that outlawed discrimination based on race, color, religion, sex or national origin. It ended unequal application of vote registration requirments and racial segregation in all institutions.",
            where: "USA",
            when: "1964",
            whySignificant: "Started the desegregation process in the U, and shows the Legislative branch finally taking action to start civil rights movement"
        },
        {
            term: "Immigration Acts of 1965",
            who: "Lyndon Baines Johnson, congress, immigrants",
            what: "Represented a change of immigration policy of the 1920s, abolished the \"national-origins\" quota and doubled the number of immigrants allowed to enter annually.",
            where: "USA, Asia, Latin America",
            when: "1965",
            whySignificant: "Immigration numbers increases largely and created more diversity in America, and it also allowed for family unification with chain migration."
        },
        {
            term: "Black Panther Party",
            who: "Huey P. Newton, Bobby Seale",
            what: "An activist black power party that worked towards African American rights and conducted community service for African Americans in large cities. Patrolled AA communities to protect from police brutality. 10 Point Program: focus on education, economic help for AA.",
            where: "Oakland",
            when: "1966",
            whySignificant: "Powerful image of black pride. Highlights continued tension over issues of race."
        },
        {
            term: "Chicano Movement",
            who: "Cesar Chavez, Dolores Huerta, Rodolfo \"Corky\" Gonzáles, and Chicano/as (individuals of Mexican descent).",
            what: "Social and political movement in the U.S. that worked to embrace a Chicano/a identity and worldview that combated structural racism, encouraged cultural revitalization, and achieved community empowerment by rejecting assimilation.",
            where: "Southwestern United States, California, New Mexico, Arizona, Texas",
            when: "1965 - 1975",
            whySignificant: "Brought about educational, economic, and political reforms for people of Mexican-American descent. Gave a political voice to Mexican-Americans, and made Americans more aware of the unfair laws and discrimination Chicano/as faced in U.S."
        },
        {
            term: "Stonewall",
            who: "LBGT Community, Gay Rights Activists, NYPD",
            what: "Series of demonstrations by LBGT community and gay rights activists in response to a police raid at the Stonewall Inn in the Greenwich Village neighborhood of New York City.",
            where: "Greenwich Village, New York City",
            when: "June 28, 1969",
            whySignificant: "Widely considered a watershed event that transformed the gay liberation movement and the twentieth-century fight for LGBT rights in the United States."
        },
        {
            term: "Environmental Protection Agency",
            who: "Richard Nixon, congress, Rachel Carson",
            what: "Federal agency to oversee environmental monitoring and cleanup programs. Invented to protect human and environmental health.",
            where: "USA",
            when: "1970",
            whySignificant: "Protected against pollution and destruction, still exists today, and shows how the federal government has more direct concern of environmental issues."
        },
        {
            term: "ERA",
            who: "Women, middle-class",
            what: "Proposed amendment to the US Constitution designed to guarantee equal legal rights for all American citizens regardless of sex",
            where: "USA",
            when: "1971",
            whySignificant: "Largely supported by middle class, with criticism from working class about lack of protection for women in workplace. Passed Congress, but only approved by 35 of required 38 state legislatures, thus failing. Though it failed, the federal government and states have passed laws protecting the legal rights of women."
        },
        {
            term: "Watergate",
            who: "Richard Nixon, DNC, congress",
            what: "Political scandal of Nixon's administration following the arrest of 5 burglars caught at the Watergate Hotel, home of the DNC. Uncovered by WaPo by Woodward & Bernstein",
            where: "USA",
            when: "1972-1974",
            whySignificant: "Leads to a huge decrease in American trust in government and the first president to resign to avoid impeachment."
        },
        {
            term: "War Powers Act of 1973",
            who: "Nixon, Congress",
            what: "A law that limits the president's ability to commit the US to long-term armed conflicts (\"wars\") without Congressional approval",
            where: "USA",
            when: "1973",
            whySignificant: "Demonstrates a response to the Vietnam war (e.g. Gulf of Tonkin Resolution) away from giving the president unchecked power"
        },
        {
            term: "Roe V Wade",
            who: "Supreme Court, Norma McCorvey (Roe)",
            what: "Landmark Supreme Court ruling legalizing abortion in the first 2 trimesters. Court ruled 7-2 that the right to privacy was protected under the 14th Amendment",
            where: "US",
            when: "1973",
            whySignificant: "Reshaped national politics. Divides the US into pro choice and pro life camps, grass roots movements on both sides."
        },
        {
            term: "OPEC",
            who: "Saudi Arabia, Egypt, Syria, etc.",
            what: "The Arab majority of the Organization of Petroleum Exporting Countries started an embargo against countries that supported Israel in the 1973 Yom Kippur War, and oil and gas prices skyrocket in Western nations",
            where: "USA, Europe, Middle East",
            when: "1973 - 1974",
            whySignificant: "Causes emergency rationing in America, causes a long term recession (stagflation of the 1970s) and ends the period of economic prosperity after World War II"
        },
        {
            term: "Sunbelt",
            who: "American People",
            what: "Internal migration to South and Western states for retirement, jobs (defense, tech, service) climate, lower taxes from NE cities",
            where: "Southwest States: So Cal, Arizona, Texas, FL",
            when: "1950s - 1970s",
            whySignificant: "Increases population and importance politically of Sunbelt states"
        },
        {
            term: "Moral Majority",
            who: "Christians, Pat Robertson, Jerry Falwell",
            what: "Christian political action group that formed to further conservative, religious agenda including allowing prayer in schools and outlawing abortion.",
            where: "US",
            when: "1979 - 1989",
            whySignificant: "Rise of religious fundamentalism as a response to social change, experimentation of the 70s. New use of media. Helps Reagan win in 1980."
        },
        {
            term: "Detente",
            who: "Nixon, Reagan, China, Soviet Union",
            what: "Relaxation of tensions with 2 US, Soviet Union. A time of increased trade and cooperation. Evidenced by the SALT treaties. Relations become tense again when USSR invades Afghanistan in 1979.",
            where: "US, Russia",
            when: "1970s",
            whySignificant: "Relaxed tensions contribute to the end of the Cold War"
        }
    ],
    
    "Unit 9: Modern Era (1980-Present)": [
        {
            term: "Iranian Hostage Crisis",
            who: "Hostages, Carter, Reagan, Ayatollah Khomeini",
            what: "Diplomatic crisis between the US and Iran. 52 US diplomats and civilians and held for 444 days. Prompted by Iranian anger over US support of ousted Shah. Released on RR's inauguration day.",
            where: "Tehran, Iran",
            when: "1979 - 1980",
            whySignificant: "Critical moment in Iran - US relations. Hurt Carter's presidency (failed rescue attempt), start of use of economic sanctions"
        },
        {
            term: "Reaganomics",
            who: "Reagan",
            what: "Econ policies of Pres Reagan during the 1980s. Supply side econ. Reduce gov't spending, reduce taxes, reduce gov't regulation and tighten money supply to reduce inflation",
            where: "US",
            when: "1980s",
            whySignificant: "US debt balloons, some argue benefitted US economy because it ended the inflation of the 1970s.. Still advocated by many conservatives today."
        },
        {
            term: "Strategic Defense Initiative",
            who: "Reagan",
            what: "\"Star Wars\". Increased defense spending to fund space based missile defense system. US did not have the required tech to make it a reality.",
            where: "US",
            when: "1983",
            whySignificant: "Lacked popular support. But some believe it scares the Russians enough to put an eventual end of the Cold War."
        },
        {
            term: "Operation Desert Storm",
            who: "US Soldiers, Bush, Saddam Hussein",
            what: "Iraq invades oil rich Kuwait. Concern Saddam could take Saudi Arabia as well; would control ⅕ of world's oil supply. Bombing, use of ground troops to liberate Kuwait.",
            where: "Kuwait",
            when: "1991",
            whySignificant: "1st major foreign crisis after Cold War ends. Massive casualties and ecological damage - oil into Persian Gulf. . Didn't capture or kill Hussein. Round the clock coverage on media outlets."
        },
        {
            term: "North American Free Trade Agreement",
            who: "Clinton, Canadian & Mexican leaders",
            what: "Treaty established free trade in North America, lifting tariffs on participating countries",
            where: "US, Canada, Mexico",
            when: "1992",
            whySignificant: "Improved flow of goods -> general economic upturn"
        },
        {
            term: "War on Terror",
            who: "George W. Bush, Al-Qaeda, Osama Bin Laden",
            what: "A shift in American foreign policy following 4 surprise terrorist attacks on the morning of 9/11 (2,977 Americans killed)",
            where: "NYC, DC, World",
            when: "9/11/01 - present",
            whySignificant: "Creation of the Dept of Homeland Security, Patriot Acts, wars in Afghanistan and Iraq"
        }
    ]
};
