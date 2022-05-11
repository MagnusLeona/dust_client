const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('../../assets/svg', false, /\.svg$/);
console.log(req)
console.log(requireAll(req));