module.exports = {
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
	transform: {'^.+\\.ts?$': 'ts-jest'},
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ["/node_modules/"]
};