export const UPDATE_REMOTE_TIME = Symbol('UPDATE_REMOTE_TIME');
export const UPDATE_TIME_LEFT = Symbol('UPDATE_TIME_LEFT');

// 校对时间
export function getRemoteTime() {
  return (dispatch, getState) => {
    // 模拟获取服务器时间
    Promise.resolve(Date.now() - parseInt(Math.random()* 5000 - 2500))
      .then((r) => {
        const timeOffset = r - Date.now();
        dispatch({ type: UPDATE_REMOTE_TIME, payload: { timeOffset } });
        console.log(timeOffset, '11111-------')
      })
  }
}


// 计算剩余时间 (获取到round信息后)
export function startCount() {
  return (dispatch, getState) => {
    // 每秒更新timeLeft
    const updater = updateTimeLeft(dispatch, getState);
    updater();
  }
}

// 每秒更新timeLeft
function updateTimeLeft(dispatch, getState) {
  let lastTime = 0;
  return function iterate() {
    if (Date.now() - lastTime >= 1000) {
      lastTime = Date.now();
      const { roundInfo = {}, timeOffset, timeTotal } = getState();
      const timeLeft = timeTotal - (Date.now() - roundInfo.startTime + timeOffset);
      dispatch({ type: UPDATE_TIME_LEFT, payload: { timeLeft } });
    }
    requestAnimationFrame(() => iterate(dispatch, getState));
  }
}

