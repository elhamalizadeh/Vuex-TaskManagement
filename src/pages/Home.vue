<template>
  <div class="container">
<div class="row">
  <div class="col-md-3  border border-secondary"> Logo</div>
  <div class="col-md-3 border border-secondary"> SearchBar</div>
  <div class="col-md-6 border border-secondary">MainMenu </div>
</div>
<!------------------------------>
<div class="row">
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!---------------- dropdown ----------->
     <div class="dropdown">
  <a class="btn btn-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Metro Manila
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Metro Manila</a></li>
    <li><a class="dropdown-item" href="#">Metro Cebo</a></li>
    <li><a class="dropdown-item" href="#">Davao City</a></li>
        <li><a class="dropdown-item" href="#">Rest of the philipinnes</a></li>

  </ul>
</div>
<!-------------------->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
     
      
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown2
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown3
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div><!------------------ End row----------->
<div class="row">
  <div class="col-lg-6 col-md-12">
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/slider1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/slider2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/slider3.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
    <div class="col-md-3 gx-1 ">
      <div class="row ">
        <div class="col gy-3"><img src="@/assets/deel1.png" class="img-thumbnail  d-none d-sm-none d-md-none d-lg-block"/></div>
      </div>
      <div class="row">
        <div class="col gy-3"><img src="@/assets/deal2.png" class="img-thumbnail  d-none d-sm-none d-md-none d-lg-block"/></div>
      </div>
    </div>
  <div class="col-lg-3 col-md-12 border border-primary">
    <div class="col-lg-12 col-md-4 col-sm-4 col-xm-4"><img src="@/assets/flash-sale.jpg" class="img-thumbnail"/></div>
    <div class="col-lg-12 col-md-6 col-sm-6 col-xm-6">
    <p>Teddy Love</p>
    <p class="text-danger d-inline me-1">9$</p><p class="d-inline ms-1"><del>2.5$</del></p>
    </div>
  </div>

</div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue'

export default {
name:'HomePage',

setup(){
    const store = useStore();
    const count = computed(()=>store.state.count);
    return { count }
}
}
</script>

<style>

</style>