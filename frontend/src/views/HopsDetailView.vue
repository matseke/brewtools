<template>
    <div class="list-detail">
      <h3>Detail</h3>
      <pre>{{ id }}</pre>
      <pre>{{ name }}</pre>
      <pre>{{ averageAa }}</pre>
    </div>
  </template>
  
  <script setup>
    const props = defineProps({ 
      id: String,
      name: String,
      averageAa: String,
    });

  </script>
  
  <style>
  .list-detail {
    padding: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
  </style>