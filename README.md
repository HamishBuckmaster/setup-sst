# :gear: `setup-sst` ![](https://github.com/HamishBuckmaster/setup-sst/workflows/Tests/badge.svg)

## About

This action, sets up the SST CLI, [`sst`](https://github.com/sst/ion), on GitHub's hosted Actions runners.

This action can be run on `ubuntu-latest`, and `macos-latest` GitHub Actions runners, and will install and expose a specified version of the `sst` CLI on the runner environment.

## Usage

Setup the `sst` CLI:

```yaml
steps:
  - uses: HamishBuckmaster/setup-sst@v1
```

A specific version of the `sst` CLI can be installed:

```yaml
steps:
  - uses: HamishBuckmaster/setup-sst@v1
    with:
      version: 0.0.192
```

## Inputs

The actions supports the following inputs:

- `version`: The version of `sst` to install, defaulting to `0.0.192`

## Further reading

For information on Creating a JavaScript action, read [the docs](https://docs.github.com/actions/creating-actions/creating-a-javascript-action).

## License

[MIT](LICENSE).
