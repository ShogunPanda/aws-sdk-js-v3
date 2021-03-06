# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-rc.4](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2020-10-31)


### Bug Fixes

* log requestId, extendedRequestId, cfId in metadata ([#1640](https://github.com/aws/aws-sdk-js-v3/issues/1640)) ([3a2f617](https://github.com/aws/aws-sdk-js-v3/commit/3a2f617d15631da1616044d3ce5ef44178463475))
* **client-timestream-*:** use correct endpoint prefix ([#1643](https://github.com/aws/aws-sdk-js-v3/issues/1643)) ([f329821](https://github.com/aws/aws-sdk-js-v3/commit/f329821bbca67d8c868c1cf86b923edd8bafadd8))
* **credential-provider-cognito-identity:** return identityId as part of cognitoIdentityPool ([#1635](https://github.com/aws/aws-sdk-js-v3/issues/1635)) ([de75f7e](https://github.com/aws/aws-sdk-js-v3/commit/de75f7e8edbc747cc49e7fa9b6223c80170c925a))
* **util-format-url:** remove headers or path from input ([#1639](https://github.com/aws/aws-sdk-js-v3/issues/1639)) ([db7aa08](https://github.com/aws/aws-sdk-js-v3/commit/db7aa08bf7b795a5848e5da01f343e4d6778516c))


### Features

* **clients:** update clients as of 10/30 ([#1648](https://github.com/aws/aws-sdk-js-v3/issues/1648)) ([fdd0ddf](https://github.com/aws/aws-sdk-js-v3/commit/fdd0ddf6e6400cf72dda521ddedc144436a6043c))
* **s3-presigned-post:** support S3 object post ([#1642](https://github.com/aws/aws-sdk-js-v3/issues/1642)) ([5fb8918](https://github.com/aws/aws-sdk-js-v3/commit/5fb8918c7abb47ad3dbe0e16cdb80c8e3d652566))
* log clientName and commandName ([#1637](https://github.com/aws/aws-sdk-js-v3/issues/1637)) ([79f25ca](https://github.com/aws/aws-sdk-js-v3/commit/79f25cacc076483e0134f3626d9971ada5f1206d))





# [1.0.0-rc.3](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2020-10-27)


### Bug Fixes

* **client-cognito-identity:** remove auth for UnlinkIdentity ([#1621](https://github.com/aws/aws-sdk-js-v3/issues/1621)) ([c32e5f3](https://github.com/aws/aws-sdk-js-v3/commit/c32e5f396a5e5a2bbb74ca35262fc28ac7e6eae0))
* **codegen:** skip awsAuthPlugin when optionalAuth trait is set ([#1622](https://github.com/aws/aws-sdk-js-v3/issues/1622)) ([785272b](https://github.com/aws/aws-sdk-js-v3/commit/785272b1bf0e1898b73504d8001baad546857de0))
* **generate-clients:** Invoke prettier relative to client-generation ([#1614](https://github.com/aws/aws-sdk-js-v3/issues/1614)) ([a4136ab](https://github.com/aws/aws-sdk-js-v3/commit/a4136abc34ffb2c1dcc1a7e0c5c32119fff1c415))


### Features

* **polly-request-presigner:** add presigned getSynthesizeSpeechUrl() ([#1612](https://github.com/aws/aws-sdk-js-v3/issues/1612)) ([2c9fd94](https://github.com/aws/aws-sdk-js-v3/commit/2c9fd947571c61c2fbc2a9164f93698967f84a0e))
* update client description to add keywords ([#1631](https://github.com/aws/aws-sdk-js-v3/issues/1631)) ([93fc586](https://github.com/aws/aws-sdk-js-v3/commit/93fc5866bf6e5f3b40f8dcfe829172bb80cc8391))





# [1.0.0-rc.2](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2020-10-22)


### Bug Fixes

* **storage:** add version and downloads badges ([#1599](https://github.com/aws/aws-sdk-js-v3/issues/1599)) ([230d030](https://github.com/aws/aws-sdk-js-v3/commit/230d0305801c298f93d3c534884833bf5cfa3f3f))
* throw 3XX redirection as errors explicitly ([#1591](https://github.com/aws/aws-sdk-js-v3/issues/1591)) ([76f83f1](https://github.com/aws/aws-sdk-js-v3/commit/76f83f19c96dc6c8705c8367cae5d87bbcfd7b23))





# [1.0.0-rc.1](https://github.com/aws/aws-sdk-js-v3/compare/v1.0.0-gamma.11...v1.0.0-rc.1) (2020-10-19)


### Bug Fixes

* **node-http-handler:** fix type error sending Uint8Array as payload ([#1561](https://github.com/aws/aws-sdk-js-v3/issues/1561)) ([7bf03fc](https://github.com/aws/aws-sdk-js-v3/commit/7bf03fcd9475760bcc529d22063414cdfe8870ea))


### Features

* **storage:** adding lib/storage upload ([#1547](https://github.com/aws/aws-sdk-js-v3/issues/1547)) ([b07e719](https://github.com/aws/aws-sdk-js-v3/commit/b07e71986817d7781e12d9b687532c58d5ea6ba0))
* ready for release candidate ([#1578](https://github.com/aws/aws-sdk-js-v3/issues/1578)) ([519f66c](https://github.com/aws/aws-sdk-js-v3/commit/519f66c6388b91d0bd750a511e6d1af56196835e))
