// Extend the existing championData object
Object.assign(championData, {
    ahri: {
        overview: `
            <h2>Ahri - The Nine-Tailed Fox</h2>
            <p>Role: Mage/Assassin</p>
            <p>Lane: Mid</p>
            <p>Damage Type: Magic</p>
            <p>Release Date: December 14, 2011</p>
        `,
        abilities: `
            <h3>Passive - Essence Theft</h3>
            <div class="ability">Gains stacks of Essence Theft when hitting enemies with abilities, healing when enough stacks are obtained</div>
            
            <h3>Q - Orb of Deception</h3>
            <div class="ability">Throws orb dealing magic damage on way out and true damage on return</div>
            
            <h3>W - Fox-Fire</h3>
            <div class="ability">Releases three fox-fires that target nearby enemies</div>
            
            <h3>E - Charm</h3>
            <div class="ability">Blows a kiss that damages and charms the first enemy hit</div>
            
            <h3>R - Spirit Rush</h3>
            <div class="ability">Three dashes that each release essence bolts at nearby enemies</div>
        `,
        builds: `
            <h3>Core Items</h3>
            <ul>
                <li>Liandry's Anguish/Everfrost (Mythic)</li>
                <li>Sorcerer's Shoes</li>
                <li>Shadowflame</li>
                <li>Zhonya's Hourglass</li>
            </ul>
            
            <h3>Situational Items</h3>
            <ul>
                <li>Cosmic Drive</li>
                <li>Void Staff</li>
                <li>Rabadon's Deathcap</li>
                <li>Banshee's Veil</li>
            </ul>
        `,
        counters: `
            <h3>Strong Against</h3>
            <ul>
                <li>Immobile Mages (Xerath, Lux)</li>
                <li>Squishies without Escapes</li>
                <li>Melee Champions without Gap Closers</li>
            </ul>
            
            <h3>Weak Against</h3>
            <ul>
                <li>Kassadin</li>
                <li>LeBlanc</li>
                <li>Yasuo</li>
                <li>Zed</li>
            </ul>
        `,
        advanced: `
            <h3>Advanced Combos</h3>
            <ul>
                <li>E > Q > W > R (Standard Combo)</li>
                <li>R > E > Q > W > R > R (All-in Combo)</li>
                <li>Q > R > W (Poke Combo)</li>
            </ul>
            
            <h3>Tips</h3>
            <ul>
                <li>Use R to reposition for landing E</li>
                <li>Q returns even if CCed</li>
                <li>W prioritizes charmed targets</li>
                <li>Save one R charge for escape</li>
            </ul>
        `
    },
    zed: {
        overview: `
            <h2>Zed - The Master of Shadows</h2>
            <p>Role: Assassin</p>
            <p>Lane: Mid</p>
            <p>Damage Type: Physical</p>
            <p>Release Date: November 13, 2012</p>
        `,
        abilities: `
            <h3>Passive - Contempt for the Weak</h3>
            <div class="ability">Basic attacks against low health targets deal bonus magic damage</div>
            
            <h3>Q - Razor Shuriken</h3>
            <div class="ability">Throws shurikens that deal physical damage</div>
            
            <h3>W - Living Shadow</h3>
            <div class="ability">Creates a shadow that can mimic abilities and allows position swapping</div>
            
            <h3>E - Shadow Slash</h3>
            <div class="ability">Spins blades dealing damage and slowing enemies hit</div>
            
            <h3>R - Death Mark</h3>
            <div class="ability">Becomes untargetable and marks target, creating a shadow and dealing delayed damage</div>
        `,
        builds: `
            <h3>Core Items</h3>
            <ul>
                <li>Eclipse/Duskblade (Mythic)</li>
                <li>Ionian Boots of Lucidity</li>
                <li>Youmuu's Ghostblade</li>
                <li>Serylda's Grudge</li>
            </ul>
            
            <h3>Situational Items</h3>
            <ul>
                <li>Edge of Night</li>
                <li>Death's Dance</li>
                <li>Black Cleaver</li>
                <li>Guardian Angel</li>
            </ul>
        `,
        counters: `
            <h3>Strong Against</h3>
            <ul>
                <li>Immobile Mages</li>
                <li>Squishy ADCs</li>
                <li>Champions without CC</li>
            </ul>
            
            <h3>Weak Against</h3>
            <ul>
                <li>Lissandra</li>
                <li>Malzahar</li>
                <li>Diana</li>
                <li>Kayle</li>
            </ul>
        `,
        advanced: `
            <h3>Advanced Combos</h3>
            <ul>
                <li>W > E > Q (Basic Poke)</li>
                <li>R > E > Q > W > W > E > Q (Full Combo)</li>
                <li>W > R > E > Q > W > R (Shadow Switch Combo)</li>
            </ul>
            
            <h3>Tips</h3>
            <ul>
                <li>Use W to extend Q range</li>
                <li>R places you behind target</li>
                <li>Energy management is crucial</li>
                <li>Save W for escape in dangerous situations</li>
            </ul>
        `
    }
});
