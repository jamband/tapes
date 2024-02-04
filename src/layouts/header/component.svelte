<script lang="ts">
  import { base } from "$app/paths";
  import { APP_NAME } from "@/constants/app";

  const [name, repository] = APP_NAME.split("/");
</script>

<header class="container">
  <nav class="nav" aria-label="Header navigation">
    <a href="{base}/" class="link"
      ><span class="account">{name}/</span><span class="repository"
        >{repository}</span
      ></a
    >
  </nav>
</header>

<style>
  @import "./component.css";
</style>
