{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        overlays = [ ];
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShell =
          with pkgs;
          mkShell {
            buildInputs = [
              nodejs_24
              # Pin yarn to the same Node as the shell, so it cannot drift to an
              # older nixpkgs default that Astro does not support.
              (yarn.override { nodejs = nodejs_24; })
            ];
          };
      }
    );
}
