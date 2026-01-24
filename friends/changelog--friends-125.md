#### People
- [Techno Tim](https://technotim.com) - Tim Stewart's website, YouTube channel, and documentation hub
- [Crosstalk Solutions](https://crosstalksolutions.com) - Chris's channel, mentioned for building custom Ubiquiti API tools

#### Virtualization & Infrastructure
- [Proxmox VE](https://www.proxmox.com/en/proxmox-virtual-environment) - Open-source virtualization platform for VMs and containers
- [TrueNAS](https://www.truenas.com) - Enterprise-grade open-source storage operating system built on ZFS
- [HexOS](https://hexos.com) - Consumer-friendly NAS OS built on TrueNAS (in development)
- [Proxmox VE Helper Scripts](https://community-scripts.github.io/ProxmoxVE/) - Community-maintained scripts for easy LXC and VM deployment

#### Self-Hosted Software
- [Paperless-NGX](https://docs.paperless-ngx.com) - Self-hosted document management system with OCR
- [Paperless-GPT](https://github.com/icereed/paperless-gpt) - AI-powered enhancement for Paperless-NGX using LLMs
- [Ollama](https://ollama.ai) - Run large language models locally on your own hardware
- [Open WebUI](https://openwebui.com) - Self-hosted web interface for interacting with local LLMs
- [Plex](https://www.plex.tv) - Media server for organizing and streaming your personal media library
- [Home Assistant](https://www.home-assistant.io) - Open-source home automation platform
- [Pi-hole](https://pi-hole.net) - Network-wide ad blocking via DNS filtering

#### Document Intelligence & RAG
- [Dockling](https://github.com/DS4SD/docling) - IBM's open-source document parsing library for AI/RAG pipelines
- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) - Multi-language OCR toolkit for document recognition

#### AI & Agents
- [Claude](https://claude.ai) - Anthropic's AI assistant, used for homelab automation in this episode
- [OpenCode](https://opencode.ai) - Open-source AI coding agent (mentioned as potential homelab tool)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io) - Protocol for connecting AI models to external tools and data

#### Networking
- [Ubiquiti](https://ui.com) - Enterprise networking gear popular with homelabbers (UDM Pro, UniFi)
- [Tailscale](https://tailscale.com) - Zero-config VPN for secure networking between devices

#### Container & Orchestration
- [Docker](https://www.docker.com) - Container platform for packaging and running applications
- [Kubernetes](https://kubernetes.io) - Container orchestration for managing containerized workloads
- [Fly.io](https://fly.io) - Platform for running containers close to users globally

#### Monitoring & Observability
- [Grafana](https://grafana.com) - Open-source analytics and visualization platform
- [Prometheus](https://prometheus.io) - Open-source monitoring and alerting toolkit

#### Security & Authentication
- [Bitwarden](https://bitwarden.com) - Open-source password manager (self-hostable)
- [Authelia](https://www.authelia.com) - Open-source authentication and authorization server

#### Databases
- [MariaDB](https://mariadb.org) - Community-developed fork of MySQL
- [Redis](https://redis.io) - In-memory data store for caching and messaging
- [PostgreSQL](https://www.postgresql.org) - Advanced open-source relational database

#### Hardware Mentioned
- [Intel Optane](https://www.intel.com/content/www/us/en/products/details/memory-storage/optane-memory.html) - Ultra-low latency storage drives (discontinued but prized for ZFS special vdevs)
- [NVIDIA GeForce RTX 3090](https://www.nvidia.com/en-us/geforce/graphics-cards/30-series/rtx-3090-3090ti/) - GPU used for Plex transcoding and local AI inference

#### Concepts & Techniques
- [ZFS Special Vdevs](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Special%20vdev.html) - ZFS feature for accelerating metadata and small file operations
- [PCIe Bifurcation](https://www.servethehome.com/pcie-bifurcation-explained/) - Splitting a PCIe slot to support multiple NVMe drives
- [Medallion Architecture](https://www.databricks.com/glossary/medallion-architecture) - Bronze/Silver/Gold data lake pattern discussed for document ETL