<template>
  <ul id="default-layout">
    <li v-for="tag in $tag.list" :key="tag.name">
      <router-link class="page-link" :to="tag.path">
        {{ tag.name }} ({{ tag.pages.length }})
      </router-link>
    </li>
  </ul>
</template>
