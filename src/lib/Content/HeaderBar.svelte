<script lang="ts">
  import { logout } from "../../ts/api/auth";
  import { appDstName, currentPage, LOCKED, sideBarOpened } from "../../ts/env";
  import "../../css/content/headerbar.css";
  import logo from "../../assets/egg.png";
  import { get } from "svelte/store";
  import {
    hideConfirmation,
    showConfirmation,
  } from "../../ts/confirmation/main";

  function confirmLogout() {
    showConfirmation({
      title: "Afmelden",
      message: `Weet je zeker dat je je wilt afmelden?`,
      okButton: {
        capt: "Afmelden",
        event: () => {
          logout();
        },
        icon: "logout",
        className: "suggested",
      },
      cancelButton: {
        capt: "Annuleren",
        event: () => {
          hideConfirmation();
        },
        icon: "cancel",
        className: "",
      },
    });
  }
</script>

<div class="headerbar">
  <button
    on:click={() => {
      sideBarOpened.set(!get(sideBarOpened));
    }}
    class="material-icons menubutt"
  >
    {!$sideBarOpened ? "menu" : "close"}
  </button>
  <h3 class="eggHeader">
    <img src={logo} alt="Logo" class="logo" />
    <span>{appDstName}</span>
    {#if LOCKED}
      <span class="material-icons">lock</span>
    {/if}
  </h3>
  <div class="right">
    <div class="pagedisp">
      <span class="material-icons"
        >{#if $currentPage}{$currentPage.icon}{:else}preview{/if}</span
      >
      <span
        >{#if $currentPage}{$currentPage.name}{:else}Onbekend{/if}</span
      >
    </div>
    <button class="material-icons logout" on:click={confirmLogout}
      >logout</button
    >
  </div>
</div>
