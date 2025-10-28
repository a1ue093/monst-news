const formSelect = document.getElementById("form-select");
const styleSelect = document.getElementById("style-select");
const connectSkillContainer = document.getElementById("connect-skill-container");
const shotSkillContainer = document.getElementById("shot-skill-container");
const assistSkillContainer = document.getElementById("assist-skill-container");

formSelect.addEventListener("change", () => {
    let index = styleSelect.selectedIndex;

    if (formSelect.value === "jushinka") {
        styleSelect.innerHTML = `<option value="balance">バランス型</option>
      <option value="power">パワー型</option>
      <option value="speed">スピード型</option>
      <option value="bump">砲撃型</option>`;
    } else {
        styleSelect.innerHTML = `<option value="super-balance">超バランス型</option>
      <option value="super-power">超パワー型</option>
      <option value="super-speed">超スピード型</option>
      <option value="super-bump">超砲撃型</option>`;
    }

    styleSelect.selectedIndex = index;

    switch (formSelect.value) {
        case "jushinka":
            connectSkillContainer.style.display = "none";
            shotSkillContainer.style.display = "none";
            assistSkillContainer.style.display = "none";
            break;
        case "kai":
            connectSkillContainer.style.display = "block";
            shotSkillContainer.style.display = "none";
            assistSkillContainer.style.display = "none";
            break;
        case "shin":
            connectSkillContainer.style.display = "none";
            shotSkillContainer.style.display = "block";
            assistSkillContainer.style.display = "block";
            break;
    }
});

const gaugeCheckbox = document.getElementById("gauge-checkbox");

gaugeCheckbox.addEventListener("change", () => {
    if (gaugeCheckbox.checked) {
        gaugeAbilityContainer.style.display = "block";
    } else {
        gaugeAbilityContainer.style.display = "none";
    }
});

const abilityContainer = document.getElementById("ability-container");
const abilityAddButton = document.getElementById("ability-add-button");

abilityAddButton.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "ability-group";
    div.innerHTML = `<input type="text" class="ability-input" placeholder="アビリティを入力">
    <label>
      NEW:
      <input type="checkbox" class="ability-new-checkbox">
    </label>
    <button class="ability-remove-button">削除</button>`;
    abilityContainer.insertBefore(div, abilityAddButton);
});

abilityContainer.addEventListener("click", (e) => {
    if (e.target.className === "ability-remove-button") {
        e.target.parentElement.remove();
    }
});

const gaugeAbilityContainer = document.getElementById("gauge-ability-container");
const gaugeAbilityAddButton = document.getElementById("gauge-ability-add-button");

gaugeAbilityAddButton.addEventListener("click", () => {
    const div = document.createElement("div");
    div.className = "gauge-ability-group";
    div.innerHTML = `<input type="text" class="gauge-ability-input" placeholder="ゲージアビリティを入力">
    <label>
      NEW:
      <input type="checkbox" class="gauge-ability-new-checkbox">
    </label>
    <button class="gauge-ability-remove-button">削除</button>`;
    gaugeAbilityContainer.insertBefore(div, gaugeAbilityAddButton);
});

gaugeAbilityContainer.addEventListener("click", (e) => {
    if (e.target.className === "gauge-ability-remove-button") {
        e.target.parentElement.remove();
    }
});

const generateButton = document.getElementById("generate-button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const elementSelect = document.getElementById("element-select");
const typeSelect = document.getElementById("type-select");
const speciesInput = document.getElementById("species-input");
const luckSkillSelect = document.getElementById("luck-skill-select");
const connectSkillContentInput = document.getElementById("connect-skill-content-input");
const connectSkillConditionInput = document.getElementById("connect-skill-condition-input");
const shotSkillInput = document.getElementById("shot-skill-input");
const assistSkillInput = document.getElementById("assist-skill-input");
const ssTurn1stInput = document.getElementById("ss-turn-1st-input");
const ssTurn2ndInput = document.getElementById("ss-turn-2nd-input");
const ssNameInput = document.getElementById("ss-name-input");
const ssDescriptionInput = document.getElementById("ss-description-input");
const ssNewCheckbox = document.getElementById("ss-new-checkbox");
const bumpElementSelect = document.getElementById("bump-element-select");
const bumpNameInput = document.getElementById("bump-name-input");
const bumpNewCheckbox = document.getElementById("bump-new-checkbox");
const subBumpElementSelect = document.getElementById("sub-bump-element-select");
const subBumpNameInput = document.getElementById("sub-bump-name-input");
const subBumpNewCheckbox = document.getElementById("sub-bump-new-checkbox");

const bg_fire = new Image();
bg_fire.src = "images/bg_fire.png";
const bg_water = new Image();
bg_water.src = "images/bg_water.png";
const bg_wood = new Image();
bg_wood.src = "images/bg_wood.png";
const bg_light = new Image();
bg_light.src = "images/bg_light.png";
const bg_dark = new Image();
bg_dark.src = "images/bg_dark.png";

const base_jushinka = new Image();
base_jushinka.src = "images/base_jushinka.png";
const base_kai = new Image();
base_kai.src = "images/base_kai.png";
const base_shin = new Image();
base_shin.src = "images/base_shin.png";

const logo = new Image();
logo.src = "images/logo.png";

const text_white_jushinka = new Image();
text_white_jushinka.src = "images/text_white_jushinka.png";
const text_black_jushinka = new Image();
text_black_jushinka.src = "images/text_black_jushinka.png";
const text_white_kai = new Image();
text_white_kai.src = "images/text_white_kai.png";
const text_black_kai = new Image();
text_black_kai.src = "images/text_black_kai.png";
const text_white_shin = new Image();
text_white_shin.src = "images/text_white_shin.png";
const text_black_shin = new Image();
text_black_shin.src = "images/text_black_shin.png";

const illust_white = new Image();
illust_white.src = "images/illust_white.png";
const illust_black = new Image();
illust_black.src = "images/illust_black.png";

const type_bounce = new Image();
type_bounce.src = "images/type_bounce.png";
const type_pierce = new Image();
type_pierce.src = "images/type_pierce.png";
const type_bounce_gauge = new Image();
type_bounce_gauge.src = "images/type_bounce_gauge.png";
const type_pierce_gauge = new Image();
type_pierce_gauge.src = "images/type_pierce_gauge.png";

const luck_skill_critical = new Image();
luck_skill_critical.src = "images/luck_skill_critical.png";
const luck_skill_shield = new Image();
luck_skill_shield.src = "images/luck_skill_shield.png";
const luck_skill_bump_critical = new Image();
luck_skill_bump_critical.src = "images/luck_skill_bump_critical.png";
const luck_skill_guide = new Image();
luck_skill_guide.src = "images/luck_skill_guide.png";

const ability_frame = new Image();
ability_frame.src = "images/ability_frame.png";
const ability_new = new Image();
ability_new.src = "images/ability_new.png";
const ability_gauge = new Image();
ability_gauge.src = "images/ability_gauge.png";

const ss_bump_new = new Image();
ss_bump_new.src = "images/ss_bump_new.png";

const bump_none = new Image();
bump_none.src = "images/bump_none.png";
const bump_all = new Image();
bump_all.src = "images/bump_all.png";
const bump_fire = new Image();
bump_fire.src = "images/bump_fire.png";
const bump_water = new Image();
bump_water.src = "images/bump_water.png";
const bump_wood = new Image();
bump_wood.src = "images/bump_wood.png";
const bump_light = new Image();
bump_light.src = "images/bump_light.png";
const bump_dark = new Image();
bump_dark.src = "images/bump_dark.png";

generateButton.addEventListener("click", () => {
    const load1 = document.fonts.load('36px "M PLUS 2 Bold"');
    const load2 = document.fonts.load('40px "M PLUS 2 Bold"');
    const load3 = document.fonts.load('45px "M PLUS 2 Bold"');

    Promise.all([load1, load2, load3]).then(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        switch (elementSelect.value) {
            case "fire":
                ctx.drawImage(bg_fire, 0, 0);
                break;
            case "water":
                ctx.drawImage(bg_water, 0, 0);
                break;
            case "wood":
                ctx.drawImage(bg_wood, 0, 0);
                break;
            case "light":
                ctx.drawImage(bg_light, 0, 0);
                break;
            case "dark":
                ctx.drawImage(bg_dark, 0, 0);
                break;
        }

        switch (formSelect.value) {
            case "jushinka":
                ctx.drawImage(base_jushinka, 0, 0);
                break;
            case "kai":
                ctx.drawImage(base_kai, 0, 0);
                break;
            case "shin":
                ctx.drawImage(base_shin, 0, 0);
                break;
        }

        ctx.drawImage(logo, 0, 0);

        if (elementSelect.value === "wood" || elementSelect.value === "light") {
            switch (formSelect.value) {
                case "jushinka":
                    ctx.drawImage(text_black_jushinka, 0, 0);
                    break;
                case "kai":
                    ctx.drawImage(text_black_kai, 0, 0);
                    break;
                case "shin":
                    ctx.drawImage(text_black_shin, 0, 0);
                    break;
            }

            ctx.drawImage(illust_black, 0, 0);
        } else {
            switch (formSelect.value) {
                case "jushinka":
                    ctx.drawImage(text_white_jushinka, 0, 0);
                    break;
                case "kai":
                    ctx.drawImage(text_white_kai, 0, 0);
                    break;
                case "shin":
                    ctx.drawImage(text_white_shin, 0, 0);
                    break;
            }

            ctx.drawImage(illust_white, 0, 0);
        }

        switch (typeSelect.value) {
            case "bounce":
                ctx.drawImage(gaugeCheckbox.checked ? type_bounce_gauge : type_bounce, 0, 0);
                break;
            case "pierce":
                ctx.drawImage(gaugeCheckbox.checked ? type_pierce_gauge : type_pierce, 0, 0);
                break;
        }

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = '36px "M PLUS 2 Bold"';
        ctx.fillStyle = elementSelect.value === "wood" || elementSelect.value === "light" ? "#282828" : "#f2f2f2";

        ctx.fillText(speciesInput.value, 156, 1024);

        switch (styleSelect.value) {
            case "balance":
                ctx.fillText("バランス型", 426, 1024);
                break;
            case "power":
                ctx.fillText("パワー型", 426, 1024);
                break;
            case "speed":
                ctx.fillText("スピード型", 426, 1024);
                break;
            case "bump":
                ctx.fillText("砲撃型", 426, 1024);
                break;
            case "super-balance":
                ctx.fillText("超バランス型", 426, 1024);
                break;
            case "super-power":
                ctx.fillText("超パワー型", 426, 1024);
                break;
            case "super-speed":
                ctx.fillText("超スピード型", 426, 1024);
                break;
            case "super-bump":
                ctx.fillText("超砲撃型", 426, 1024);
                break;
        }

        switch (luckSkillSelect.value) {
            case "critical":
                ctx.drawImage(luck_skill_critical, 0, 0);
                break;
            case "shield":
                ctx.drawImage(luck_skill_shield, 0, 0);
                break;
            case "bump-critical":
                ctx.drawImage(luck_skill_bump_critical, 0, 0);
                break;
            case "guide":
                ctx.drawImage(luck_skill_guide, 0, 0);
                break;
        }

        const abilities = Array.from(document.querySelectorAll(".ability-input"), el => el.value);
        const gaugeAbilities = Array.from(document.querySelectorAll(".gauge-ability-input"), el => el.value);

        const abilityNews = Array.from(document.querySelectorAll(".ability-new-checkbox"), el => el.checked);
        const gaugeAbilityNews = Array.from(document.querySelectorAll(".gauge-ability-new-checkbox"), el => el.checked);

        if (abilities.length + gaugeAbilities.length > 0) {
            ctx.font = '36px "M PLUS 2 Bold"';
            ctx.fillStyle = "#f2f2f2";

            if (formSelect.value === "kai" || formSelect.value === "shin") {
                if (abilities.length + gaugeAbilities.length < 3) {
                    const width = 1216, height = (360 - 10 * ((abilities.length + gaugeAbilities.length) - 1)) / (abilities.length + gaugeAbilities.length);

                    for (let i = 0; i < abilities.length; i++) {
                        const x = 680, y = 25 + (height + 10) * i;
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);

                        if (abilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.fillText(abilities[i], x + (width / 2), y + (height / 2));
                    }

                    const maxLength = gaugeAbilities.map(v => ctx.measureText(v).width).reduce((a, b) => Math.max(a, b), 0);

                    for (let i = 0; i < gaugeAbilities.length; i++) {
                        const x = 680, y = 25 + (height + 10) * abilities.length + (height + 10) * i;
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);
                        
                        if (gaugeAbilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.drawImage(ability_gauge, x + (width / 2) - (68 + 14 + maxLength) / 2, y + (height / 2) - 30);
                        ctx.fillText(gaugeAbilities[i], x + (width / 2) + (68 + 14) / 2, y + (height / 2));
                    }
                } else {
                    const width = 602.5, height = (360 - 10 * ((Math.ceil(abilities.length / 2) + Math.ceil(gaugeAbilities.length / 2)) - 1)) / (Math.ceil(abilities.length / 2) + Math.ceil(gaugeAbilities.length / 2));

                    for (let i = 0; i < abilities.length; i++) {
                        const x = 680 + (width + 11) * (i % 2), y = 25 + (height + 10) * Math.floor(i / 2);
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);
                        
                        if (abilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.fillText(abilities[i], x + (width / 2), y + (height / 2));
                    }

                    const leftMaxLength = gaugeAbilities.filter((_, i) => i % 2 == 0).map(v => ctx.measureText(v).width).reduce((a, b) => Math.max(a, b), 0);
                    const rightMaxLength = gaugeAbilities.filter((_, i) => i % 2 == 1).map(v => ctx.measureText(v).width).reduce((a, b) => Math.max(a, b), 0);

                    for (let i = 0; i < gaugeAbilities.length; i++) {
                        const x = 680 + (width + 11) * (i % 2), y = 25 + (height + 10) * Math.ceil(abilities.length / 2) + (height + 10) * Math.floor(i / 2);
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);
                        
                        if (gaugeAbilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.drawImage(ability_gauge, x + (width / 2) - (68 + 14 + (i % 2 == 0 ? leftMaxLength : rightMaxLength)) / 2, y + (height / 2) - 30);
                        ctx.fillText(gaugeAbilities[i], x + (width / 2) + (68 + 14) / 2, y + (height / 2));
                    }
                }
            } else {
                if (abilities.length + gaugeAbilities.length < 3) {
                    const width = 1216, height = (484 - 14 * ((abilities.length + gaugeAbilities.length) - 1)) / (abilities.length + gaugeAbilities.length);

                    for (let i = 0; i < abilities.length; i++) {
                        const x = 680, y = 25 + (height + 14) * i;
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);
                        
                        if (abilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.fillText(abilities[i], x + (width / 2), y + (height / 2));
                    }

                    const maxLength = gaugeAbilities.map(v => ctx.measureText(v).width).reduce((a, b) => Math.max(a, b), 0);

                    for (let i = 0; i < gaugeAbilities.length; i++) {
                        const x = 680, y = 25 + (height + 14) * abilities.length + (height + 14) * i;
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);
                        
                        if (gaugeAbilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.drawImage(ability_gauge, x + (width / 2) - (68 + 14 + maxLength) / 2, y + (height / 2) - 30);
                        ctx.fillText(gaugeAbilities[i], x + (width / 2) + (68 + 14) / 2, y + (height / 2));
                    }
                } else {
                    const width = 602.5, height = (484 - 14 * ((Math.ceil(abilities.length / 2) + Math.ceil(gaugeAbilities.length / 2)) - 1)) / (Math.ceil(abilities.length / 2) + Math.ceil(gaugeAbilities.length / 2));

                    for (let i = 0; i < abilities.length; i++) {
                        const x = 680 + (width + 11) * (i % 2), y = 25 + (height + 14) * Math.floor(i / 2);
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);
                        
                        if (abilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.fillText(abilities[i], x + (width / 2), y + (height / 2));
                    }

                    const leftMaxLength = gaugeAbilities.filter((_, i) => i % 2 == 0).map(v => ctx.measureText(v).width).reduce((a, b) => Math.max(a, b), 0);
                    const rightMaxLength = gaugeAbilities.filter((_, i) => i % 2 == 1).map(v => ctx.measureText(v).width).reduce((a, b) => Math.max(a, b), 0);

                    for (let i = 0; i < gaugeAbilities.length; i++) {
                        const x = 680 + (width + 11) * (i % 2), y = 25 + (height + 14) * Math.ceil(abilities.length / 2) + (height + 14) * Math.floor(i / 2);
                        draw9Slice(ctx, ability_frame, x, y, width, height, 40, 40, 40, 40);
                        
                        if (gaugeAbilityNews[i]) {
                            ctx.drawImage(ability_new, x, y);
                        }

                        ctx.drawImage(ability_gauge, x + (width / 2) - (68 + 14 + (i % 2 == 0 ? leftMaxLength : rightMaxLength)) / 2, y + (height / 2) - 30);
                        ctx.fillText(gaugeAbilities[i], x + (width / 2) + (68 + 14) / 2, y + (height / 2));
                    }
                }
            }
        }

        if (formSelect.value === "kai") {
            ctx.font = '40px "M PLUS 2 Bold"';
            ctx.fillStyle = "#f2f2f2";
            fillMultilineCenteredText(ctx, connectSkillContentInput.value, 1425, 470, 56);
            ctx.font = '36px "M PLUS 2 Bold"';
            ctx.fillStyle = "#282828";
            fillMultilineCenteredText(ctx, connectSkillConditionInput.value, 1418, 598, 44);
        }

        if (formSelect.value === "shin") {
            ctx.font = '40px "M PLUS 2 Bold"';
            ctx.fillStyle = "#282828";
            fillMultilineCenteredText(ctx, shotSkillInput.value, 1429, 473, 48);
            fillMultilineCenteredText(ctx, assistSkillInput.value, 1429, 605, 48);
        }

        if (formSelect.value === "kai" || formSelect.value === "shin") {
            ctx.font = '45px "M PLUS 2 Bold"';
            ctx.fillStyle = "#f2f2f2";
            ctx.fillText(`${ssTurn1stInput.value}+${ssTurn2ndInput.value}`, 791, 808);
            ctx.font = '40px "M PLUS 2 Bold"';
            ctx.fillStyle = "#f2f2f2";
            ctx.fillText(ssNameInput.value, 1425, 708);

            if (ssNewCheckbox.checked) {
                ctx.drawImage(ss_bump_new, 1425 + ctx.measureText(ssNameInput.value).width / 2 + 24, 688);
            }

            ctx.font = '36px "M PLUS 2 Bold"';
            ctx.fillStyle = "#282828";
            fillMultilineCenteredText(ctx, ssDescriptionInput.value, 1418, 804, 44);
        } else {
            ctx.font = '45px "M PLUS 2 Bold"';
            ctx.fillStyle = "#f2f2f2";
            ctx.fillText(`${ssTurn1stInput.value}+${ssTurn2ndInput.value}`, 791, 677);
            ctx.font = '40px "M PLUS 2 Bold"';
            ctx.fillStyle = "#f2f2f2";
            ctx.fillText(ssNameInput.value, 1425, 591);

            if (ssNewCheckbox.checked) {
                ctx.drawImage(ss_bump_new, 1425 + ctx.measureText(ssNameInput.value).width / 2 + 24, 572);
            }

            ctx.font = '36px "M PLUS 2 Bold"';
            ctx.fillStyle = "#282828";
            fillMultilineCenteredText(ctx, ssDescriptionInput.value, 1406, 717, 44);
        }

        if (formSelect.value === "kai" || formSelect.value === "shin") {
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = '40px "M PLUS 2 Bold"';
            ctx.fillStyle = "#282828";

            const maxLength = Math.max(ctx.measureText(bumpNameInput.value).width, ctx.measureText(subBumpNameInput.value).width);

            switch (bumpElementSelect.value) {
                case "none":
                    ctx.drawImage(bump_none, 956, 885, 115, 71);
                    break;
                case "all":
                    ctx.drawImage(bump_all, 956, 885, 115, 71);
                    break;
                case "fire":
                    ctx.drawImage(bump_fire, 956, 885, 115, 71);
                    break;
                case "water":
                    ctx.drawImage(bump_water, 956, 885, 115, 71);
                    break;
                case "wood":
                    ctx.drawImage(bump_wood, 956, 885, 115, 71);
                    break;
                case "light":
                    ctx.drawImage(bump_light, 956, 885, 115, 71);
                    break;
                case "dark":
                    ctx.drawImage(bump_dark, 956, 885, 115, 71);
                    break;
            }

            ctx.fillText(bumpNameInput.value, 1092, 922);

            if (bumpNewCheckbox.checked) {
                ctx.drawImage(ss_bump_new, 1092 + maxLength + 24, 904);
            }

            switch (subBumpElementSelect.value) {
                case "none":
                    ctx.drawImage(bump_none, 956, 985, 115, 71);
                    break;
                case "all":
                    ctx.drawImage(bump_all, 956, 985, 115, 71);
                    break;
                case "fire":
                    ctx.drawImage(bump_fire, 956, 985, 115, 71);
                    break;
                case "water":
                    ctx.drawImage(bump_water, 956, 985, 115, 71);
                    break;
                case "wood":
                    ctx.drawImage(bump_wood, 956, 985, 115, 71);
                    break;
                case "light":
                    ctx.drawImage(bump_light, 956, 985, 115, 71);
                    break;
                case "dark":
                    ctx.drawImage(bump_dark, 956, 985, 115, 71);
                    break;
            }

            ctx.fillText(subBumpNameInput.value, 1092, 1023);

            if (subBumpNewCheckbox.checked) {
                ctx.drawImage(ss_bump_new, 1092 + maxLength + 24, 1005);
            }
        } else {
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.font = '40px "M PLUS 2 Bold"';
            ctx.fillStyle = "#282828";

            const maxLength = Math.max(ctx.measureText(bumpNameInput.value).width, ctx.measureText(subBumpNameInput.value).width);

            switch (bumpElementSelect.value) {
                case "none":
                    ctx.drawImage(bump_none, 958, 809);
                    break;
                case "all":
                    ctx.drawImage(bump_all, 958, 809);
                    break;
                case "fire":
                    ctx.drawImage(bump_fire, 958, 809);
                    break;
                case "water":
                    ctx.drawImage(bump_water, 958, 809);
                    break;
                case "wood":
                    ctx.drawImage(bump_wood, 958, 809);
                    break;
                case "light":
                    ctx.drawImage(bump_light, 958, 809);
                    break;
                case "dark":
                    ctx.drawImage(bump_dark, 958, 809);
                    break;
            }
            
            ctx.fillText(bumpNameInput.value, 1127, 862);

            if (bumpNewCheckbox.checked) {
                ctx.drawImage(ss_bump_new, 1127 + maxLength + 26, 844);
            }

            switch (subBumpElementSelect.value) {
                case "none":
                    ctx.drawImage(bump_none, 958, 952);
                    break;
                case "all":
                    ctx.drawImage(bump_all, 958, 952);
                    break;
                case "fire":
                    ctx.drawImage(bump_fire, 958, 952);
                    break;
                case "water":
                    ctx.drawImage(bump_water, 958, 952);
                    break;
                case "wood":
                    ctx.drawImage(bump_wood, 958, 952);
                    break;
                case "light":
                    ctx.drawImage(bump_light, 958, 952);
                    break;
                case "dark":
                    ctx.drawImage(bump_dark, 958, 952);
                    break;
            }

            ctx.fillText(subBumpNameInput.value, 1127, 1004);

            if (subBumpNewCheckbox.checked) {
                ctx.drawImage(ss_bump_new, 1127 + maxLength + 26, 986);
            }
        }

        isDrawn = true;
    });
});

function fillMultilineCenteredText(ctx, text, centerX, centerY, lineHeight) {
    const lines = text.split("\n");
    const totalHeight = lineHeight * lines.length;

    let startY = centerY - (totalHeight - lineHeight) / 2;

    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], centerX, startY + i * lineHeight);
    }
}

function draw9Slice(ctx, img, x, y, width, height, left, top, right, bottom) {
    const sw = img.width;
    const sh = img.height;

    const centerWidth = sw - left - right;
    const centerHeight = sh - top - bottom;
    const destCenterWidth = width - left - right;
    const destCenterHeight = height - top - bottom;

    ctx.drawImage(img, 0, 0, left, top, x, y, left, top);
    ctx.drawImage(img, left, 0, centerWidth, top, x + left, y, destCenterWidth, top);
    ctx.drawImage(img, sw - right, 0, right, top, x + width - right, y, right, top);
    ctx.drawImage(img, 0, top, left, centerHeight, x, y + top, left, destCenterHeight);
    ctx.drawImage(img, left, top, centerWidth, centerHeight, x + left, y + top, destCenterWidth, destCenterHeight);
    ctx.drawImage(img, sw - right, top, right, centerHeight, x + width - right, y + top, right, destCenterHeight);
    ctx.drawImage(img, 0, sh - bottom, left, bottom, x, y + height - bottom, left, bottom);
    ctx.drawImage(img, left, sh - bottom, centerWidth, bottom, x + left, y + height - bottom, destCenterWidth, bottom);
    ctx.drawImage(img, sw - right, sh - bottom, right, bottom, x + width - right, y + height - bottom, right, bottom);
}

const downloadButton = document.getElementById("download-button");

let isDrawn = false;

downloadButton.addEventListener("click", () => {
    if (isDrawn) {
        const link = document.createElement("a");
        link.download = "status.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    }
});