import { writable } from "svelte/store";
import type { EggEntry } from "./api/egg";
import type { Confirmation } from "./confirmation/main";
import type { Page } from "./page/interfaces";

export const isLoggedIn = writable<boolean>(false);
export const EggApiServ = `https://eggsapi.twiserver.nl`;
export const appDstName = "Reggistry";
export const appDstVers = [2, 2, 5];
export const egTokenKey = "eggToken";
export const sideBarOpened = writable<boolean>(false);
export const eggCount = writable<number>(0);
export const itmCount = writable<number>(0);
export const maxEggs = 6;
export const currentPage = writable<Page>();
export const currentPageId = writable<string>();
export const editData = writable<EggEntry>();
export const detailsData = writable<EggEntry>();
export const loginStatus = writable<[boolean, string]>([false, ""]);
export const confirmationData = writable<[boolean, Confirmation]>([
  false,
  null,
]);
export const LOCKED = false;
