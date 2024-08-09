import bootstrap from '/svg/skills/bootstrap.svg';
import bulma from '/svg/skills/bulma.svg';
import c from '/svg/skills/c.svg';
import css from '/svg/skills/css.svg';
import django from '/svg/skills/django.svg';
import git from '/svg/skills/git.svg';
import html from '/svg/skills/html.svg';
import java from '/svg/skills/java.svg';
import javascript from '/svg/skills/javascript.svg';
import materialui from '/svg/skills/materialui.svg';
import mongoDB from '/svg/skills/mongoDB.svg';
import mysql from '/svg/skills/mysql.svg';
import python from '/svg/skills/python.svg';
import react from '/svg/skills/react.svg';
import tailwind from '/svg/skills/tailwind.svg';
import vitejs from '/svg/skills/vitejs.svg';
import nodeJS from '/svg/skills/nodeJS.svg';

const skillImages = new Map([
    ['html', html],
    ['css', css],
    ['javascript', javascript],
    ['node js', nodeJS],
    ['react', react],
    ['bootstrap', bootstrap],
    ['bulma', bulma],
    ['mongodb', mongoDB],
    ['mysql', mysql],
    ['tailwind', tailwind],
    ['vitejs', vitejs],
    ['c', c],
    ['java', java],
    ['python', python],
    ['django', django],
    ['git', git],
    ['materialui', materialui],
]);

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    return skillImages.get(skillID);
};