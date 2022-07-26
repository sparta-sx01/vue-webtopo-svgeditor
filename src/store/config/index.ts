import { defineStore } from 'pinia';
import { IPositionCenter } from './types';
/**
 * 配置文件
 */
export const useConfigStore = defineStore('config-store', {
  state: (): IPositionCenter => {
    return {
      svg: {
        background_color: '#fff',
        scale: 1,
        position_center: {
          x: -50,
          y: -50
        }
      }
    };
  },
  getters: {},
  actions: {}
});
