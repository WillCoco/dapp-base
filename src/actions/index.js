import EOS from "eosjs";
import ScatterJS from "scatterjs-core";
import ScatterEOS from "scatterjs-plugin-eosjs";

export const ACTION_TEST = Symbol('ACTION_TEST');
export const UPDATE_IDENTITY = Symbol('UPDATE_IDENTITY');


const network = {
  blockchain: "eos",
  host: "mainnet.eoscanada.com",
  port: 443,
  protocol: "https",
  chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
};


ScatterJS.plugins(new ScatterEOS());

let EOSClient;
let isConnected;

// 自动登陆
export function initApp() {
  return async (dispatch) => {
    // 注册自动登录
    document.addEventListener('scatterLoaded', () => {
      connect()(dispatch);
    });
  }
}

// 手动登陆
export function login() {
  return function (dispatch) {
    console.log(isConnected, 'EOSClient');
    if (!isConnected) {
      connect()(dispatch);
    } else {
      EOSClient = ScatterJS.scatter.eos(network, EOS);
      getId()(dispatch);
    }
  }
}

// 登出
export function logout() {
  return function (dispatch) {
    ScatterJS.logout()
      .then((res) => {
        console.log(res, '登出成功');
        dispatch({ type: UPDATE_IDENTITY, payload: { identity: null } });
        EOSClient = null;
        console.log('登出成功')
      })
      .catch(err => {console.log('登出失败')})
  }
}

// 获取身份
function getId() {
  return (dispatch) => {
    ScatterJS.scatter && ScatterJS.scatter.getIdentity({ accounts: [network] })
      .then(() => {
        // 获取身份成功
        const identity = ScatterJS.account('eos');
        console.log(identity, 'this.scatter.identity.accounts');
        dispatch({ type: UPDATE_IDENTITY, payload: { identity } });
      })
      .catch((err) => {
        console.log(err, '获取身份失败');
        alert('获取身份失败')
      });
  }
}

// 普通交易
// window.scatter.transfer(name, toAddress, quantity+' EOS', memo, transactionOptions)
//   .then(r => console.log(r))
//   .catch(r => {
//     console.log(r);
//     alert(r.type)
//   })

// 获取余额
// EOSClinet.getCurrencyBalance('eosio.token', "hazdembvhage").then(console.log)
// EOSClinet.getCurrencyBalance('ethsidechain', 'hazdembvhage').then(r => console.log(r, 111))

// 账户信息
// EOSClinet.getAccount('hazdembvhage').then(console.log)

// 合约操作
export function transfer({
  contract = 'eosio.token',
  actionName = 'transfer',
  to,
  quantity = '',
  memo
}) {
  return (dispatch, getState) => {
    const { identity = {} } = getState();
    if (!identity) {
      alert('未登陆账户');
      return Promise.reject('未登陆账户');
    }
    // // contract方式交易
    // return EOSClient.contract('ethsidechain')
    //   .then(r => {
    //     r.transfer(
    //       identity.name,
    //       to,
    //       '1.0000 EETH',
    //       memo,
    //       { authorization: [`${identity.name}@${identity.authority}`]}
    //     ).then(r => {
    //       console.log(r, 'transfer');
    //     })
    //   });

    // transaction方式
    return EOSClient.transaction(
      {
        // ...headers,
        actions: [
          {
            account: contract,
            name: actionName,
            authorization: [{
              actor: identity.name,
              permission: identity.authority
            }],
            data: {
              from: identity.name,
              to: to,
              quantity,
              memo
            }
          }
        ]
      }
    )
      .then(res => {console.log(res, 'fasong token')})
      .catch(err => {
        return Promise.reject(err);
      });
  }
}

// connect to scatter
function connect () {
  return (dispatch) => {
    ScatterJS.scatter.connect("p3d")
      .then(connected => {
        // User does not have Scatter Desktop, Mobile or Classic installed.
        console.log(connected, 'connected');
        isConnected = connected;
        if (!connected) return false;

        // connect 之后 EOSClient有发送等功能
        EOSClient = ScatterJS.scatter.eos(network, EOS);
        // (ScatterJS.scatter.eos === window.scatter.eos) => true 引用同一个对象
        console.log(EOSClient.getTableRows('hazdembvhage'), '触发scatterLoaded');
        // EOSClient.contract('eosio.token').then(r => console.log(r, 1919919199));
        EOSClient.contract('ethsidechain').then(r => console.log(r, 'ethsidechain'));
        // EOSClient.getAbi('hazdembvhage').then(r => console.log(r, 'getAbi'));
        // console.log(ScatterJS.scatter.eos === window.scatter.eos, '触发scatterLoaded');
        getId()(dispatch);

        // window.scatter = null;
        // window.ScatterJS = null;
      })
      .catch(err => {
        alert(err);
        console.log(err, 'connect')
      });
  }
}

