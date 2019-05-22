function feed (parent, args, context, info) {
  return context.prisma.links();
}

function info () {
  return 'Test';
}

function users (root, args, context, info) {
  return context.prisma.users();
}

module.exports = {
  feed,
  info,
  users
};
