import * as adobeXd from '/svg/skills/adobe-xd.svg';
import adobeaudition from '/svg/skills/adobeaudition.svg';
import afterEffects from '/svg/skills/after-effects.svg';
import angular from '/svg/skills/angular.svg';
import aws from '/svg/skills/aws.svg';
import azure from '/svg/skills/azure.svg';
import blender from '/svg/skills/blender.svg';
import bootstrap from '/svg/skills/bootstrap.svg';
import bulma from '/svg/skills/bulma.svg';
import c from '/svg/skills/c.svg';
import canva from '/svg/skills/canva.svg';
import capacitorjs from '/svg/skills/capacitorjs.svg';
import coffeescript from '/svg/skills/coffeescript.svg';
import cplusplus from '/svg/skills/cplusplus.svg';
import csharp from '/svg/skills/csharp.svg';
import css from '/svg/skills/css.svg';
import dart from '/svg/skills/dart.svg';
import deno from '/svg/skills/deno.svg';
import django from '/svg/skills/django.svg';
import docker from '/svg/skills/docker.svg';
import fastify from '/svg/skills/fastify.svg';
import figma from '/svg/skills/figma.svg';
import firebase from '/svg/skills/firebase.svg';
import flutter from '/svg/skills/flutter.svg';
import gcp from '/svg/skills/gcp.svg';
import gimp from '/svg/skills/gimp.svg';
import git from '/svg/skills/git.svg';
import go from '/svg/skills/go.svg';
import graphql from '/svg/skills/graphql.svg';
import haxe from '/svg/skills/haxe.svg';
import html from '/svg/skills/html.svg';
import illustrator from '/svg/skills/illustrator.svg';
import ionic from '/svg/skills/ionic.svg';
import java from '/svg/skills/java.svg';
import javascript from '/svg/skills/javascript.svg';
import julia from '/svg/skills/julia.svg';
import kotlin from '/svg/skills/kotlin.svg';
import lightroom from '/svg/skills/lightroom.svg';
import markdown from '/svg/skills/markdown.svg';
import materialui from '/svg/skills/materialui.svg';
import matlab from '/svg/skills/matlab.svg';
import memsql from '/svg/skills/memsql.svg';
import microsoftoffice from '/svg/skills/microsoftoffice.svg';
import mongoDB from '/svg/skills/mongoDB.svg';
import mysql from '/svg/skills/mysql.svg';
import nextJS from '/svg/skills/nextJS.svg';
import nginx from '/svg/skills/nginx.svg';
import numpy from '/svg/skills/numpy.svg';
import nuxtJS from '/svg/skills/nuxtJS.svg';
import opencv from '/svg/skills/opencv.svg';
import photoshop from '/svg/skills/photoshop.svg';
import php from '/svg/skills/php.svg';
import picsart from '/svg/skills/picsart.svg';
import postgresql from '/svg/skills/postgresql.svg';
import premierepro from '/svg/skills/premierepro.svg';
import python from '/svg/skills/python.svg';
import pytorch from '/svg/skills/pytorch.svg';
import react from '/svg/skills/react.svg';
import ruby from '/svg/skills/ruby.svg';
import selenium from '/svg/skills/selenium.svg';
import sketch from '/svg/skills/sketch.svg';
import strapi from '/svg/skills/strapi.svg';
import svelte from '/svg/skills/svelte.svg';
import swift from '/svg/skills/swift.svg';
import tailwind from '/svg/skills/tailwind.svg';
import tensorflow from '/svg/skills/tensorflow.svg';
import typescript from '/svg/skills/typescript.svg';
import unity from '/svg/skills/unity.svg';
import vitejs from '/svg/skills/vitejs.svg';
import vue from '/svg/skills/vue.svg';
import vuetifyjs from '/svg/skills/vuetifyjs.svg';
import webix from '/svg/skills/webix.svg';
import wolframalpha from '/svg/skills/wolframalpha.svg';
import wordpress from '/svg/skills/wordpress.svg';
import nodeJS from '/svg/skills/nodeJS.svg';

const skillImages = {
    'gcp': gcp,
    'html': html,
    'photoshop': photoshop,
    'docker': docker,
    'illustrator': illustrator,
    'adobe xd': adobeXd,
    'after effects': afterEffects,
    'css': css,
    'angular': angular,
    'javascript': javascript,
    'next js': nextJS,
    'nuxt js': nuxtJS,
    'node js': nodeJS,
    'react': react,
    'svelte': svelte,
    'typescript': typescript,
    'vue': vue,
    'bootstrap': bootstrap,
    'bulma': bulma,
    'capacitorjs': capacitorjs,
    'coffeescript': coffeescript,
    'memsql': memsql,
    'mongodb': mongoDB,
    'mysql': mysql,
    'postgresql': postgresql,
    'tailwind': tailwind,
    'vitejs': vitejs,
    'vuetifyjs': vuetifyjs,
    'c': c,
    'c++': cplusplus,
    'c#': csharp,
    'dart': dart,
    'go': go,
    'java': java,
    'kotlin': kotlin,
    'julia': julia,
    'matlab': matlab,
    'php': php,
    'python': python,
    'ruby': ruby,
    'swift': swift,
    'adobe audition': adobeaudition,
    'aws': aws,
    'deno': deno,
    'django': django,
    'firebase': firebase,
    'gimp': gimp,
    'git': git,
    'graphql': graphql,
    'lightroom': lightroom,
    'materialui': materialui,
    'nginx': nginx,
    'numpy': numpy,
    'opencv': opencv,
    'premiere pro': premierepro,
    'pytorch': pytorch,
    'selenium': selenium,
    'strapi': strapi,
    'tensorflow': tensorflow,
    'webix': webix,
    'wordpress': wordpress,
    'azure': azure,
    'blender': blender,
    'fastify': fastify,
    'figma': figma,
    'flutter': flutter,
    'haxe': haxe,
    'ionic': ionic,
    'markdown': markdown,
    'microsoft office': microsoftoffice,
    'picsart': picsart,
    'sketch': sketch,
    'unity': unity,
    'wolframalpha': wolframalpha,
    'canva': canva
};

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    return skillImages[skillID];
};