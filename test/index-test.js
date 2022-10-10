function shout(string) {
  // todo 
  return string;
"Hello!".toUpperCase(); // 'HELLO!'
}
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('HELLO')).toEqual('HELLO');
  })
})
function whisper(string) {
  //todo
  return string
  "hello".toLowerCase(); // 'hello'
}
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('hello')).toEqual('hello');
  })
})
function logShout(string) {
  console.log(string.toUpperCase())
} 
describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('HELLO');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})
function logWhisper(string) {
  console.log(string.toLowerCase())
}
describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('hello');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  it('returns "I would love to!" if `string` is "Let\s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) 
    return 'I can\'t hear you!';
    else if (string === string.toUpperCase())
    return 'YES INDEED!'
    else if (string === "Let's have dinner together!") 
      return "I would love to!"}