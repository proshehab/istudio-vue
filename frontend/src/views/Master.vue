<template lang="">
     <!-- Spinner Start -->
    <!-- <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> -->
    <!-- Spinner End -->

    <HeaderSection></HeaderSection>

     <router-view></router-view>

    <NewsLetterSection></NewsLetterSection>

    <FooterSection></FooterSection>
</template>
<script>
import HeaderSection from "../components/frontend/Header.vue";
import FooterSection from "../components/frontend/Footer.vue";
import NewsLetterSection from "../components/frontend/NewsLetter.vue";

export default {
    name: "MasterView",
    components: {
        HeaderSection,
        NewsLetterSection,
        FooterSection
        
    }
}
</script>
<style lang="">
    
</style>