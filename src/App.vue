<template>
  <div>
    <Header />
    <Banner />
    <Posts />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Shared/Header.vue";
import Banner from "./components/Banner.vue";
import Posts from "./components/Posts.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    Posts,
    Contact,
    Footer,
  },
};
</script>

<style></style>
