<template>
    <!-- Navbar Start -->
    <div class="container-fluid sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white">
                <router-link to="/" class="navbar-brand">
                    <h1>iSTUDIO</h1>
                </router-link>
                <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <router-link to="/" class="nav-item nav-link" exact-active-class="active">Home</router-link>
                        <router-link to="/about" class="nav-item nav-link" active-class="active">About</router-link>
                        <router-link to="/service" class="nav-item nav-link" active-class="active">Services</router-link>
                        <router-link to="/project" class="nav-item nav-link" active-class="active">Projects</router-link>
                        <router-link to="/contact" class="nav-item nav-link" active-class="active">Contact</router-link>
                        
                        <!-- Uncomment when needed
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu bg-light mt-2">
                                <router-link to="/feature" class="dropdown-item">Features</router-link>
                                <router-link to="/team" class="dropdown-item">Our Team</router-link>
                                <router-link to="/testimonial" class="dropdown-item">Testimonial</router-link>
                                <router-link to="/404" class="dropdown-item">404 Page</router-link>
                            </div>
                        </div>
                        -->
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- Navbar End -->
</template>

<script>
export default {
    name: "HeaderSection"
}
</script>

<style scoped>
/* Optional: Add hover or active custom styles */
.nav-link.active {
    color: #0d6b68 !important; /* Bootstrap primary color */
}
</style>
