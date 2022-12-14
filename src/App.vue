<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="main-header">
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>

    <input type="checkbox" id="menu-btn" class="menu-btn" />
    <label htmlFor="menu-btn" class="menu-icon">
      <p class="hidden">Menu Button</p>
      <span class="menu-icon__line"></span>
    </label>
    <nav class="nav-links">
      <ul>
        <li class="nav-link">
          <RouterLink to="/about"> About </RouterLink>
        </li>
        <li class="nav-link">
          <RouterLink to="/blog"> Blog </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
@use "./assets/scss/misc/colors.scss" as *;
@use "./assets/scss/mixins/breakpoints.scss" as *;
.main-header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100vw;
  color: #fff;
  z-index: 1;
  transition: 0.4s ease-out;
  background: map-get($odiePallet, "color1");
  z-index: 10;

  @include breakpoints(huge really_big large desktop tablet nav) {
    padding: 0 10vw;
  }
  @include breakpoints(sm_desktop lg_tablet) {
    padding: 0 15vw;
  }

  @include breakpoints(mobile) {
    padding: 0 4vw;
  }

  .logo {
    .logo-img {
      display: block;
      @include breakpoints(
        really_big large desktop sm_desktop lg_tablet tablet nav
      ) {
        width: 260px;
      }
      @include breakpoints(mobile) {
        width: 190px;
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;

    .nav-link {
      transition: opacity 0.4s ease-in-out,
        transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:nth-of-type(2) {
        transition-delay: 0.1s;
      }

      &:nth-of-type(3) {
        transition-delay: 0.2s;
      }

      &:nth-of-type(4) {
        transition-delay: 0.3s;
      }

      a {
        margin: 0.2rem;
        padding: 1.1rem 0.5rem;
        font-family: "Montserrat SemiBold", Georgia;
        transition: 1s ease-in-out;
      }

      a:hover {
        background-color: darken(map-get($odiePallet, "color1"), 5%);
        border-radius: 5px;
      }
    }
  }

  .menu-icon {
    position: relative;
    padding: 26px 10px;
    cursor: pointer;
    z-index: 1;
    display: none;

    &__line {
      display: block;
      position: relative;
      background: #fff;
      height: 3px;
      width: 30px;
      border-radius: 4px;
      transition: background 0.8s ease;

      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        background: #fff;
        transition: background 0.8s ease;
      }

      &::before {
        transform: translateY(-7px);
      }

      &::after {
        transform: translateY(7px);
      }
    }
  }

  .menu-btn {
    position: absolute;
    top: -100px;

    &:focus ~ .menu-icon {
      .menu-icon__line {
        &::before {
          transform: translateY(-9px);
        }

        &::after {
          transform: translateY(9px);
        }
      }
    }
  }

  &.scrolled {
    height: 60px;
    background: map-get($odiePallet, "color1");
    color: #fff;

    .menu-icon {
      &__line,
      &__line::before,
      &__line::after {
        background: #fff;
      }
    }
  }
}

@include breakpoints(large desktop) {
  .main-header {
    .nav-links {
      ul {
        font-size: 0.8em;
      }
    }
  }
}

@include breakpoints(sm_desktop lg_tablet tablet nav mobile) {
  .main-header {
    .menu-icon {
      display: block;
      position: absolute;
      right: 15%;

      &__line {
        animation: closedMid 0.8s backwards;
        animation-direction: reverse;

        &::before {
          animation: closedTop 0.8s backwards;
          animation-direction: reverse;
        }

        &::after {
          animation: closedBtm 0.8s backwards;
          animation-direction: reverse;
        }
      }
    }

    ul {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 10rem 0;
      width: 100vw;
      height: 100vh;
      color: #fff;
      background: map-get($odiePallet, "color1");
      transition: opacity 0.8s 0.5s, clip-path 1s 0.5s;
      clip-path: circle(200px at top right);
      margin-top: 0;
      @include breakpoints(nav mobile) {
        font-size: 1.5rem;
      }
      @include breakpoints(
        really_big large desktop sm_desktop lg_tablet tablet
      ) {
        font-size: 2rem;
      }

      .nav-link {
        opacity: 0;
        transform: translateX(100%);
        width: 100%;
        text-align: center;

        a {
          display: block;
          @include breakpoints(nav mobile) {
            padding: 1rem 0;
          }
          @include breakpoints(
            really_big large desktop sm_desktop lg_tablet tablet
          ) {
            padding: 2rem 0;
          }

          &.active {
            background-color: #404255;
          }
        }
      }
    }

    .menu-btn:checked ~ .nav-links ul {
      opacity: 1;
      clip-path: circle(100% at center);

      .nav-link {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.4s ease-in-out,
          transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:nth-of-type(1) {
          transition-delay: 0.7s;
        }

        &:nth-of-type(2) {
          transition-delay: 0.8s;
        }

        &:nth-of-type(3) {
          transition-delay: 0.9s;
        }

        &:nth-of-type(4) {
          transition-delay: 1s;
        }
      }
    }

    .menu-btn:checked ~ .menu-icon {
      border-radius: 50%;
      animation: pulse 1s;

      .menu-icon__line {
        background: #fff;
        animation: openMid 0.8s forwards;

        &::before {
          background: #fff;
          animation: openTop 0.8s forwards;
        }

        &::after {
          background: #fff;
          animation: openBtm 0.8s forwards;
        }
      }
    }
  }
  .about,
  .contact,
  .services {
    main {
      padding-top: 70px;
    }
  }
  .home {
    main {
      padding-top: 0;
    }
  }
}

.no-scroll {
  height: 100%;
  overflow: hidden;
}

.main {
  padding-top: 70px;
}
</style>
