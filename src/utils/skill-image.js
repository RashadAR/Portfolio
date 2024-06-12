// import angular from '/svg/skills/angular.svg';
// import aws from '/svg/skills/aws.svg';
// import azure from '/svg/skills/azure.svg';
import bootstrap from '/svg/skills/bootstrap.svg';
import bulma from '/svg/skills/bulma.svg';
import c from '/svg/skills/c.svg';
// import cplusplus from '/svg/skills/cplusplus.svg';
// import csharp from '/svg/skills/csharp.svg';
import css from '/svg/skills/css.svg';
import django from '/svg/skills/django.svg';
// import docker from '/svg/skills/docker.svg';
// import firebase from '/svg/skills/firebase.svg';
// import flutter from '/svg/skills/flutter.svg';
import git from '/svg/skills/git.svg';
// import go from '/svg/skills/go.svg';
import html from '/svg/skills/html.svg';
import java from '/svg/skills/java.svg';
import javascript from '/svg/skills/javascript.svg';
import materialui from '/svg/skills/materialui.svg';
import mongoDB from '/svg/skills/mongoDB.svg';
import mysql from '/svg/skills/mysql.svg';
// import nextJS from '/svg/skills/nextJS.svg';
// import nginx from '/svg/skills/nginx.svg';
// import nuxtJS from '/svg/skills/nuxtJS.svg';
// import postgresql from '/svg/skills/postgresql.svg';
import python from '/svg/skills/python.svg';
import react from '/svg/skills/react.svg';
import tailwind from '/svg/skills/tailwind.svg';
// import typescript from '/svg/skills/typescript.svg';
import vitejs from '/svg/skills/vitejs.svg';
// import vue from '/svg/skills/vue.svg';
import nodeJS from '/svg/skills/nodeJS.svg';

const skillImages = {
    'html': html,
    'css': css,
    'javascript': javascript,
    'node js': nodeJS,
    'react': react,
    'bootstrap': bootstrap,
    'bulma': bulma,
    'mongodb': mongoDB,
    'mysql': mysql,
    'tailwind': tailwind,
    'vitejs': vitejs,
    'c': c,
    'java': java,
    'python': python,
    'django': django,
    'git': git,
    'materialui': materialui,
};

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    return skillImages[skillID];
};