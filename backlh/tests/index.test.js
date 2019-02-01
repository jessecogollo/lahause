const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const request = require('request-promise')

test('my endpoint', async t => {
  const service = micro(async (req, res) => {
    micro.send(res, 200, {
      test: 'woot'
    })
  })

  const url = await listen(service)
  const body = await request(url)

  t.deepEqual(JSON.parse(body).test, 'woot')
  service.close()
});
