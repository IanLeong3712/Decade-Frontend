export const state = () => ({
  desktop: false,
  mobile: false,
})

export const actions = {
  getDevice: ({ commit }) => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      commit('SET_DEVICE', { desktop: false, mobile: true })
    } else {
      commit('SET_DEVICE', { desktop: true, mobile: false })
    }
  }
}

export const mutations = {
  SET_DEVICE(state, device) {
    state.desktop = device.desktop
    state.mobile = device.mobile
  }
}