# Book Context Protocol (BCP)

**Licensed, citable retrieval for books, papers, and deep reference material — built for AI.**

BCP is an open standard for bringing long-form licensed content (books, papers, manuals, standards) into AI workflows with clean citations, clear usage rules, and a path to paying rights holders.

Think of it as: **MCP is the wire protocol. BCP is the content contract.**

BCP defines how books and papers are packaged, cited, permissioned, and metered. It can be delivered over MCP or any other transport.

---

## The Problem

AI workflows break down where the best information lives:

- Books and paid PDFs are hard to search and retrieve well
- Citations are messy — editions, page numbers, reflowable text
- Rights are unclear — what can be quoted, cached, shared?
- Every team rebuilds the same pipelines in incompatible ways

## What BCP Defines

| Layer | What it does |
|-------|-------------|
| **Manifests** | Describe a work: IDs, editions, structure, and metadata |
| **Locators** | Stable passage references that survive reflow and format changes |
| **Policies** | Usage rules — quote length, display, caching, verbatim vs pointer-only |
| **Receipts** | Optional usage metering for billing and author payouts |

## Core Interface

BCP providers expose four standard tools:

```
search(query, filters)        → ranked passage handles
fetch(handle, max_chars)      → text + citation + policy + receipt
cite(handle, style)           → formatted citation
policy(work_id)               → what's allowed for this work
```

Example response:

```json
{
  "work_id": "isbn:9780465043577#edition:1",
  "passage_handle": "p:ch05.par12@hash:3a91",
  "text": "...",
  "citation": {
    "type": "book",
    "locator": "ch. 5, para. 12",
    "text_hash": "3a91"
  },
  "policy_applied": {
    "verbatim_allowed": true,
    "max_chars": 800,
    "display_ok": true
  },
  "receipt": {
    "meter": "chars_returned",
    "quantity": 642,
    "cost_usd": 0.0048
  }
}
```

## Who This Is For

- **Builders** — Plug books and papers into agents and RAG with a standard interface
- **Research & quant teams** — Build internal knowledge systems with proper citations
- **Publishers & authors** — New revenue channel with audit trails and usage controls
- **Institutions** — Compliance-friendly access to licensed content for AI workflows

## Design Principles

- **Citable by default** — every passage comes with a stable locator
- **Rights-aware** — policies travel with the content
- **Bring-your-own-access** — works with content you already have rights to
- **Provider-neutral** — local, enterprise, or publisher-hosted all use the same interface
- **Practical first** — minimal spec that people can implement fast

## Project Structure

BCP is organized across several repositories:

| Repository | Description |
|-----------|-------------|
| [specification](https://github.com/book-context-protocol/specification) | The BCP spec — manifests, locators, policies, receipts |
| [website](https://github.com/book-context-protocol/website) | bookcontextprotocol.com landing page |
| [typescript-sdk](https://github.com/book-context-protocol/typescript-sdk) | TypeScript SDK for providers and clients |
| [python-sdk](https://github.com/book-context-protocol/python-sdk) | Python SDK for providers and clients |
| [packager](https://github.com/book-context-protocol/packager) | Turn EPUB/PDF into BCP packages with stable locators |
| [servers](https://github.com/book-context-protocol/servers) | Reference provider implementations |
| [mcp-server](https://github.com/book-context-protocol/mcp-server) | MCP tool wrapper for BCP providers |

## Roadmap

**v0.1 — Foundation**
- Work manifest schema (IDs, editions, structure)
- Passage locator + citation format
- Basic policy schema (quoting, display, caching)
- Reference provider + example client

**v0.2 — Commerce**
- Usage receipts + payout reporting
- Versioning and change tracking
- No-verbatim / pointer-only mode

**v0.3 — Ecosystem**
- Hosted provider platform (BCP Cloud)
- Publisher marketplace + discovery
- Billing and payout rails

## Products

| Tier | What | License |
|------|------|---------|
| **BCP Open** | Spec, SDKs, packager, local providers | Apache 2.0 |
| **BCP Cloud** | Hosted providers, org controls, audit | Commercial |
| **BCP Market** | Licensed catalogs, discovery, payouts | Commercial |

## Getting Started

*The specification and SDKs are in early development. Join the waitlist at [bookcontextprotocol.com](https://bookcontextprotocol.com) for updates.*

## License

Apache 2.0 — see [LICENSE](LICENSE) for details.
