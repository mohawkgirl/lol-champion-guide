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
,
    leblanc: {
        overview: `
            <h2>LeBlanc - The Deceiver</h2>
            <p>Role: Assassin/Mage</p>
            <p>Lane: Mid</p>
            <p>Damage Type: Magic</p>
            <p>Release Date: November 2, 2010</p>
        `,
        abilities: `
            <h3>Passive - Mirror Image</h3>
            <div class="ability">When falling below 40% HP, becomes invisible and creates a mirror image</div>
            
            <h3>Q - Sigil of Malice</h3>
            <div class="ability">Marks target with sigil that can be detonated by other abilities</div>
            
            <h3>W - Distortion</h3>
            <div class="ability">Dashes to location dealing damage, can return to original position</div>
            
            <h3>E - Ethereal Chains</h3>
            <div class="ability">Launches chains that root target if they stay in range</div>
            
            <h3>R - Mimic</h3>
            <div class="ability">Creates empowered version of last basic ability cast</div>
        `,
        builds: `
            <h3>Core Items</h3>
            <ul>
                <li>Luden's Tempest (Mythic)</li>
                <li>Sorcerer's Shoes</li>
                <li>Shadowflame</li>
                <li>Rabadon's Deathcap</li>
            </ul>
            
            <h3>Situational Items</h3>
            <ul>
                <li>Void Staff</li>
                <li>Zhonya's Hourglass</li>
                <li>Banshee's Veil</li>
                <li>Mejai's Soulstealer</li>
            </ul>
        `,
        counters: `
            <h3>Strong Against</h3>
            <ul>
                <li>Immobile Mages</li>
                <li>Squishy Carries</li>
                <li>Champions without CC</li>
            </ul>
            
            <h3>Weak Against</h3>
            <ul>
                <li>Galio</li>
                <li>Kassadin</li>
                <li>Lissandra</li>
                <li>Malzahar</li>
            </ul>
        `,
        advanced: `
            <h3>Advanced Combos</h3>
            <ul>
                <li>W > Q > R(Q) > E (Burst Combo)</li>
                <li>E > Q > R(Q) > W (Chain Combo)</li>
                <li>W > R(W) > Q > E (Double Dash)</li>
            </ul>
            
            <h3>Tips</h3>
            <ul>
                <li>Use W to fake engages</li>
                <li>Chain R with different abilities based on situation</li>
                <li>Return W can dodge crucial abilities</li>
                <li>Use passive clone to block skillshots</li>
            </ul>
        `
    },
    syndra: {
        overview: `
            <h2>Syndra - The Dark Sovereign</h2>
            <p>Role: Mage</p>
            <p>Lane: Mid</p>
            <p>Damage Type: Magic</p>
            <p>Release Date: September 13, 2012</p>
        `,
        abilities: `
            <h3>Passive - Transcendent</h3>
            <div class="ability">Each ability gains additional effects at max rank</div>
            
            <h3>Q - Dark Sphere</h3>
            <div class="ability">Creates a dark sphere dealing magic damage</div>
            
            <h3>W - Force of Will</h3>
            <div class="ability">Grabs and throws spheres or minions at target area</div>
            
            <h3>E - Scatter the Weak</h3>
            <div class="ability">Knocks enemies and spheres back, stunning if hit by sphere</div>
            
            <h3>R - Unleashed Power</h3>
            <div class="ability">Launches all dark spheres at target enemy champion</div>
        `,
        builds: `
            <h3>Core Items</h3>
            <ul>
                <li>Luden's Tempest (Mythic)</li>
                <li>Sorcerer's Shoes</li>
                <li>Shadowflame</li>
                <li>Rabadon's Deathcap</li>
            </ul>
            
            <h3>Situational Items</h3>
            <ul>
                <li>Zhonya's Hourglass</li>
                <li>Void Staff</li>
                <li>Banshee's Veil</li>
                <li>Cosmic Drive</li>
            </ul>
        `,
        counters: `
            <h3>Strong Against</h3>
            <ul>
                <li>Immobile Mages</li>
                <li>Short-Range Champions</li>
                <li>Champions without Dashes</li>
            </ul>
            
            <h3>Weak Against</h3>
            <ul>
                <li>Fizz</li>
                <li>Zed</li>
                <li>Katarina</li>
                <li>Yasuo</li>
            </ul>
        `,
        advanced: `
            <h3>Advanced Combos</h3>
            <ul>
                <li>Q > E (Basic Stun)</li>
                <li>Q > W > E > R (Full Combo)</li>
                <li>E > Q (Quick Stun)</li>
            </ul>
            
            <h3>Tips</h3>
            <ul>
                <li>Maintain sphere count for ultimate</li>
                <li>Use E > Q for faster stun</li>
                <li>Position spheres for zone control</li>
                <li>R can be used mid-combo</li>
            </ul>
        `
    },
    yasuo: {
        overview: `
            <h2>Yasuo - The Unforgiven</h2>
            <p>Role: Fighter/Assassin</p>
            <p>Lane: Mid/Top</p>
            <p>Damage Type: Physical</p>
            <p>Release Date: December 13, 2013</p>
        `,
        abilities: `
            <h3>Passive - Way of the Wanderer</h3>
            <div class="ability">Double critical strike chance and generates shield with movement</div>
            
            <h3>Q - Steel Tempest</h3>
            <div class="ability">Thrusting strike that can create whirlwind on third cast</div>
            
            <h3>W - Wind Wall</h3>
            <div class="ability">Projects wall blocking enemy projectiles</div>
            
            <h3>E - Sweeping Blade</h3>
            <div class="ability">Dashes through target, dealing damage</div>
            
            <h3>R - Last Breath</h3>
            <div class="ability">Teleports to airborne enemy champion dealing damage</div>
        `,
        builds: `
            <h3>Core Items</h3>
            <ul>
                <li>Immortal Shieldbow (Mythic)</li>
                <li>Berserker's Greaves</li>
                <li>Infinity Edge</li>
                <li>Bloodthirster</li>
            </ul>
            
            <h3>Situational Items</h3>
            <ul>
                <li>Death's Dance</li>
                <li>Guardian Angel</li>
                <li>Mortal Reminder</li>
                <li>Spirit Visage</li>
            </ul>
        `,
        counters: `
            <h3>Strong Against</h3>
            <ul>
                <li>Projectile-based Champions</li>
                <li>Immobile Mages</li>
                <li>ADCs</li>
            </ul>
            
            <h3>Weak Against</h3>
            <ul>
                <li>Annie</li>
                <li>Pantheon</li>
                <li>Renekton</li>
                <li>Garen</li>
            </ul>
        `,
        advanced: `
            <h3>Advanced Combos</h3>
            <ul>
                <li>E > Q (Beyblade)</li>
                <li>EQ > Flash (Keyblade)</li>
                <li>Q3 > R > Q > E > Q (Airblade)</li>
            </ul>
            
            <h3>Tips</h3>
            <ul>
                <li>Track enemy CC cooldowns</li>
                <li>Use E on minions for mobility</li>
                <li>Time Wind Wall carefully</li>
                <li>Stack Q before objectives</li>
            </ul>
        `
    }
});
