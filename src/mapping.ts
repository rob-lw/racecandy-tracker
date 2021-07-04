import { BigInt, log } from "@graphprotocol/graph-ts"
import {
  ErrorOut,
  Minted,
  Bought,
  Thing,
} from "../generated/Thing/Thing"
import { TokenMinted, TokenBought } from "../generated/schema"

export function handleErrorOut(event: ErrorOut): void {
  log.error("handleError", [event.params.error.toString()])
   // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.supportsInterface(...)
  // - contract.name(...)
  // - contract.getApproved(...)
  // - contract.totalSupply(...)
  // - contract.tokenOfOwnerByIndex(...)
  // - contract.tokenByIndex(...)
  // - contract.maker(...)
  // - contract.mintWithTokenURI(...)
  // - contract.ownerOf(...)
  // - contract.balanceOf(...)
  // - contract.tokensOfOwner(...)
  // - contract.owner(...)
  // - contract.isOwner(...)
  // - contract.symbol(...)
  // - contract.baseUri(...)
  // - contract.isMinter(...)
  // - contract.id(...)
  // - contract.items(...)
  // - contract.tokenURI(...)
  // - contract.isApprovedForAll(...)
}

export function handleMinted(event: Minted): void {
  //log.error("handleMinted-ID {}", [event.params.id.toHex()])
  //log.error("handleMinted-MetaData {}", [event.params.metaId])

  let token = new TokenMinted(event.params.id.toHex())
  token.id = event.params.id.toString()
  token.metaId = event.params.metaId
  token.save()
}

export function handleBought(event: Bought): void {
  //log.error("handleBought-ID {}", [event.params.tokenId.toHex()])
  //log.error("handleBought-MetaData {}", [event.params.metaId])
  //log.error("handleBought-Value {}", [event.params.value.toHex()])

  let sale = new TokenBought(event.params.tokenId.toHex())
  sale.id = event.params.tokenId.toString()
  sale.tokenId = event.params.tokenId
  sale.value = event.params.value
  sale.save()
}