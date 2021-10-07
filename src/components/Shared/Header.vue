<template>
  <header class="header">
    <a href="#" class="logo"><span>blog</span>ger</a>

    <nav :class="{ navbar: navbarClass, 'navbar active': !navbarClass }">
      <a href="#banner">banner</a>
      <a href="#posts">my posts</a>
      <a href="#contact">contact me</a>
    </nav>

    <div class="icons">
      <!-- <i class="fas fa-bars" id="menu-bars"></i> -->
      <i
        :class="{ 'fas fa-bars': menuClass, 'fas fa-times': !menuClass }"
        @click="menu"
        id="menu-bars"
      ></i>

      <i
        :class="{
          'fas fa-search': searchIconClass,
          'fas fa-times': !searchIconClass,
        }"
        id="search-icon"
        @click="search"
      ></i>
    </div>

    <form
      action=""
      :class="{
        'search-form': searchIconClass,
        'search-form active': !searchIconClass,
      }"
    >
      <input
        type="search"
        name=""
        placeholder="search here..."
        id="search-box"
      />
      <label for="search-box" class="fas fa-search"></label>
    </form>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuClass: true,
      navbarClass: true,
      searchIconClass: true,
      searchFormClass: true,
    };
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    menu() {
      // alert("menu clicked");
      this.menuClass = !this.menuClass;
      this.navbarClass = !this.navbarClass;
      this.searchIconClass = true;
    },
    search() {
      // alert("search clicked");
      this.searchIconClass = !this.searchIconClass;
      this.menuClass = true;
      this.navbarClass = true;
    },
    handleScroll() {
      this.menuClass = true;
      this.navbarClass = true;
      this.searchIconClass = true;
    },
  },
};
</script>
