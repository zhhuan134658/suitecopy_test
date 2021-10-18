/**
 * 动态加载script脚本
 *
 * @param {string} url js链接
 * @return {Promise<void>} 返回Promise
 * @example
 * loadScript('https://h5.dingtalk.com').then(() => {
 *  console.log('done');
 * });
 */
declare function loadScript(url: string, attributes?: {
    id: string;
}): Promise<unknown>;
export default loadScript;
