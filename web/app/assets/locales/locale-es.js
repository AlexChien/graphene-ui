 module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch",
        es: "Español",
        tr: "Türkçe"
    },
    header: {
        title: "Graphene - Interfaz de Usiario",
        account: "Cuenta",
        dashboard: "Tablero",
        explorer: "Explorer",
        exchange: "Exchange",
        payments: "Transferir",
        logout: "Salir",
        settings: "Configuración",
        current: "Cuenta Actual",
        create_account: "Crear Cuenta",
        create_asset: "Crear Activo",
        lock: "Bloquear",
        unlock: "Desbloquear",
        help: "Ayuda",
        locked_tip: "Billetera bloqueada. Click para desbloquear.",
        unlocked_tip: "Billetera desbloqueada. Click para bloquear"
    },
    operation: {
        pending: "%(blocks)s bloques pendientes"
    },
    account: {
        welcome: "Bienvenido a Graphene",
        asset: "Activo",
        market_value: "Valor de Mercado",
        hour_24: "Cambio 24hs",
        recent: "Actividad reciente",
        name: "Nombre de la Cuenta",
        more: "ver más",
        deposit_withdraw: "Depositar/Retirar",
        member: {
            stats: "Membresía",
            join: "Ingresado en",
            registrar: "Registrante",
            referrer: "Afiliado Referente",
            lifetime_referrer: "Referente Vitalicio",
            network_percentage: "Red",
            fee_allocation: "Asignación de Comisiones",
            membership: "Membresía",
            fees_paid: "Membresía vitalicia paga",
            fees_pending: "Comisiones pendientes",
            fees_vested: "Comisiones pendientes de consolidación",
            referrals: "Referidos",
            rewards: "Reembolso de Honorarios",
            cashback: "Reembolso",
            vested: "Consolidado",
            unknown: "Miembro desconocido",
            lifetime: "Miembro vitalicio",
            basic: "Miembro básico",
            annual: "Suscriptor anual",
            upgrade_lifetime: "Comprar Suscripción Vitalicia",
            subscribe: "Comprar Suscripción Anual",
            expires: "expira",
            membership_expiration: "Vencimiento de la Membresía",
            your_referal_link: "Your Referral Link",
            referral_stats_for: "Referral Stats for %(name)s",
            note: "NOTE",
            upgrade_notice_for_referral_link: "Upgrade to annual/lifetime member to engage referral program and get your exclusive referral links"
        },
        user_issued_assets: {
            symbol: "Simbolo",
            name: "Nombre del Activo",
            description: "Descripcion",
            max_supply: "Emision maxima",
            precision: "Precision",
            to: "Emitir a la cuenta",
            details: "Detalles"
        },
        connections: {
            known: "Conocido por",
            "black": "En lista negra por"
        },
        perm: {
            active: "Permisos Activos",
            owner: "Permisos de Propietario",
            memo_key: "Memo key",
            publish: "Publicar Cambios",
            reset: "Resetear Cambios",
            add: "Agregar Permisos",
            type: "Tipo",
            key: "Llave/Nombre",
            weight: "Relevancia",
            threshold: "Humbral",
            confirm_add: "Agregar",
            cancel: "Cancelar",
            add_permission_label: "Ingrese nombre de cuenta/llave y su relevancia",
            account_name_or_key: "Nombre de cuenta o Llave",
            memo_public_key: "Llave Pública Memo",
            warning1: "Active permissions weights total of %(weights_total)s should be equal or exceed threshold of %(threshold)s",
            warning2: "Owner permissions weights total of %(weights_total)s should be equal or exceed threshold of %(threshold)s",
            warning3: "Account is already in the list",
            warning4: "Key is already in the list",
            action: "Action",
            acct_or_key:" Account/Key"
        },
        votes: {
            proxy: "Convertir en Apoderado de sus Votos a",
            no_proxy: "Sin Apoderado",
            name: "Nombre",
            info: "Información",
            votes: "Votos",
            url: "Página Web",
            support: "Soporte",
            workers: "Presupuestos",
            publish: "Publicar Cambios",
            add_witness: "Agregar",
            remove_witness: "Remover",
            remove_committee: "Remover",
            add_committee: "Agregar",
            add_committee_label: "Miembro del Comité",
            add_witness_label: "Testigos",
            approve_worker: "Aprobar propuesta de trabajo",
            reject_worker: "Rechazar propuesta de trabajo"
        },
        options: {
            num_witnesses: "Testigos Deseados",
            num_committee: "Miembros del Comité Deseados",
            memo_key: "Llave Memo"
        },
        upgrade: "Actualizar membresía",
        unfollow: "No seguir",
        follow: "Seguir",
        pay: "Pagar",
        overview: "Resumen",
        bts_market: "Mercado",
        history: "Historial",
        payees: "Beneficiarios",
        permissions: "Permisos",
        voting: "Votación",
        orders: "Ordenes",
        select_placeholder: "Seleccionar Cuenta...",
        errors: {
            not_found: "La cuenta %(name)s no existe, está seguro de haberla escrito correctamente?",
            invalid: "Nombre de cuenta no válido",
            unknown: "Cuenta desconocida",
            not_yours: "No es el propietario de la cuenta"
        },
        collaterals: "Posiciones Colaterales",
        eq_value: "Valor Equivalente",
        please_create_account: "Por favor cree una cuenta",
        create_account: "Crear cuenta",
        identicon: "Identicon",
        pay_from: "Pagar Desde",
        existing_accounts: "Cuentas Existentes",
        name_input: {
            name_is_taken: "Account name is already taken.",
            not_found: "Account not found.",
            premium_name_faucet: "This is a premium name. Premium names are more expensive and can't be registered for free by faucet. Try to select another name containing at least one dash, number or no vowels.",
            premium_name_warning: "This is a premium name that is more expensive to register. Regular names have at least one dash, number or no vowels."
        },
        settle: "Settle"
    },
    pagination: {
        newer: "Más reciente",
        older: "Anterior"
    },
    transfer: {
        from: "Desde",
        pay_from: "Pagar Desde",
        amount: "Monto",
        to: "A",
        memo: "Memo",
        fee: "Comisión",
        send: "Enviar",
        final: "Balance final",
        balances: "Balances",
        available: "Disponible",
        errors: {
            req: "Campo requerido",
            pos: "El monto debe ser positivo",
            valid: "Por favor ingresar un número positivo válido",
            balance: "El balance final debe ser mayor a 0",
            insufficient: "Insufficient Balance"
        },
        back: "VOLVER",
        confirm: "CONFIRMAR",
        broadcasting: "Transmitiendo...",
        broadcast: "Su transferencia ha sido transmitida a la red",
        again: "HACER OTRA TRANSFERENCIA",
        see: "VER MIS TRANSFERENCIAS",
        close: "Cerrar"
    },
    transaction: {
        confirm: "Por favor confirme la transacción",
        broadcast_success: "La transacción ha sido transmitida",
        transaction_confirmed: "Transacción confirmada",
        broadcast_fail: "Fallo al transmitir la transacción: %(message)s",
        broadcasting: "Transmitiendo la transacción..",
        broadcasting_short: "Transmitiendo..",
        sent: "ha enviado",
        to: "a",
        received: "ha recibido",
        from: "de",
        amount_sell: "Monto a vender",
        expiration: "Vencimiento",
        fill_or: "Orden rápida (Fill or kill)",
        min_receive: "Monto mínimo a recibir",
        seller: "Vendedor",
        collateral: "Colateral",
        coll_ratio: "Relación colateral inicial",
        coll_maint: "Relación colateral de mantenimiento",
        "create_key": "Llave pública creada",
        reg_account: "ha egistrado la cuenta",
        was_reg_account: "registrada por",
        create_asset: "ha creado el activo",
        limit_order_sell: " ha publicado la orden de venta #%(num)s por %(sell_amount)s a ",
        limit_order_buy: "ha publicado la orden de compra #%(num)s por %(buy_amount)s a ",
        limit_order_cancel: "ha cancelado la orden",
        short_order: "Oden de venta en corto publicada",
        short_order_cancel: "Orden en corto cancelada ",
        at: "a",
        coll_of: "con un colateral de",
        call_order_update: "ha actualizado la posición del márgen para ",
        lifetime_upgrade_account: "ha actualizado a membresía vitalicia",
        annual_upgrade_account: "ha actualizado a membresía anual",
        update_account: "a actualizado la cuenta",
        whitelist_account: "Agregada a Lista Blanca la cuenta",
        whitelisted_by: "Fue agregado a la Lista Blanca de la cuenta",
        transfer_account: "Ha sido transferida la cuenta",
        update_asset: "Ha actualizado el activo",
        update_feed_producers: "Ha ctualizado los productores de feeds para el activo",
        feed_producer: "S ha convertido en productor de feeds para el activo",
        feed_price: "Precio del feed",
        asset_issue: "Emitido",
        was_issued: "Ha sido emitido",
        by: "por",
        burn_asset: "Incinerado",
        fund_pool: "Pool de comisiones  para %(asset)s financiado con",
        asset_settle: "Ha solicitado la liquidación de",
        asset_global_settle: "Ha solicitado la liquidación global de",
        publish_feed: "ha publicado el feed ",
        committee_member_create: "Miembro del Comité creado",
        witness_create: "Creado el Testigo",
        witness_update: "Testigo actualizado",
        witness_pay: "Se retiró el pago del Testigo a la cuenta",
        witness_receive: "Testigo recibido del Testigo",
        proposal_create: "Ha creado una propuesta",
        proposal_update: "Ha actualizado una propuesta",
        proposal_delete: "Ha eliminado una propuesta",
        withdraw_permission_create: "Ha otorgado permisos de retiro para la cuenta",
        withdraw_permission_update: "Ha actualizado los permisos de retiro para la cuenta",
        withdraw_permission_claim: "Ha reclamado permisos de retiro para la cuenta",
        withdraw_permission_delete: "Ha eliminado los permisos de retiro para la cuenta",
        paid: "pagado",
        obtain: "para obtener",
        global_parameters_update: "Actualizar parámetros globales",
        file_write: "Ha escrito un archivo",
        vesting_balance_create: "ha creado el fondo de consolidación de",
        for: "para",
        vesting_balance_withdraw: "Ha retirado un balance consolidado de",
        bond_create_offer: "Ha creado la oferta de bonos",
        bond_cancel_offer: "Ha cancelado la oferta de bonos",
        bond_accept_offer: "Ha aceptado la oferta de bonos de",
        bond_claim_collateral: "Ha solicitado el colateral de",
        bond_pay_collateral: "Pagado el colateral de",
        create_worker: "Creado el presupueto de trabajo por un monto de",
        custom: "Ha creado una operación personalizada",
        order_id: "ID de la Orden",
        balance_claim: "ha solicitado un balance de %(balance_amount)s del ID de balance #%(balance_id)s",
        balance_owner: "Llave de propietario de saldo (owner key)",
        balance_id: "ID del Balance",
        deposit_to: "Depositado a la cuenta",
        claimed: "Total solicitado",
        borrow_amount: "Deuda",
        funding_account: "Funding account",
        delta_collateral: "Cambio  de colateral",
        delta_debt: "Debt change",
        new_url: "Website",
        publisher: "Publisher",
        trxTypes: {
            transfer: "Transferencia",
            limit_order_create: "Publicar orden",
            limit_order_cancel: "Cancelar orden",
            call_order_update: "Actualizar margen",
            account_create: "Crear cuenta",
            account_update: "Actualizar cuenta",
            account_whitelist: "Lista blanca",
            account_upgrade: "Actualizar tipo de suscripción de la Cuenta",
            account_transfer: "Transferir Cuenta",
            asset_create: "Crear activo",
            asset_update: "Actualizar activo",
            asset_update_bitasset: "Actualizar SmartCoin",
            asset_update_feed_producers: "Actualizar productores de feed de activo",
            asset_issue: "Emitir activo",
            asset_reserve: "Incinerar activo",
            asset_fund_fee_pool: "Financiar Fondo de Comisiones de un activo",
            asset_settle: "Liquidación de Activos",
            asset_global_settle: "Liquidación global de Activos",
            asset_publish_feed: "Publicar feed",
            committee_member_create: "Crear miembro del Comité",
            witness_create: "Crear Testigo",
            witness_update: "Actualizar Testigo",
            witness_withdraw_pay: "Retirar pago del Testigo",
            proposal_create: "Crear propuesta",
            proposal_update: "Actualizar propuesta",
            proposal_delete: "Eliminar propuesta",
            withdraw_permission_create: "Crear permisos de retiro",
            withdraw_permission_update: "Actualizar permisos de retiro",
            withdraw_permission_claim: "Solicitar permisos de retiro",
            withdraw_permission_delete: "Eliminar permisos de retiro",
            fill_order: "Completar orden",
            committee_member_update_global_parameters: "Actualización global de parámetros",
            vesting_balance_create: "Crear fondo de consolidación",
            vesting_balance_withdraw: "Retirar fondos consolidados",
            worker_create: "Crear presupuesto de trabajo",
            custom: "Personalizado",
            assert: "Afirmar operación",
            balance_claim: "Solicitar balance",
            override_transfer: "Anular transferencia"
        }
    },
    explorer: {
        accounts: {
            title: "Cuentas"
        },
        blocks: {
            title: "Blockchain",
            globals: "Parámetros globales",
            recent: "Bloques recientes",
            trx: "Transacción",
            block_times: "Tiempo entre bloques",
            block_time: "Tiempo entre bloques",
            transactions: "# de transacciones",
            recently_missed_blocks: "Bloques perdidos recientemente",
            trx_per_block: "Trx/bloque",
            active_committee_members: "Mienbros del Comité activos",
            active_witnesses: "Testigos activos",
            avg_conf_time: "Tiempo de confirmación promedio",
            trx_per_sec: "Trx/seg",
            last_block: "Ultimo bloque",
            current_block: "Bloque actual"

        },
        block: {
            title: "Bloque",
            id: "ID de bloque",
            witness: "Testigo",
            count: "Nro de transacciones",
            date: "Fecha",
            time: "Hora",
            previous: "Previo",
            previous_secret: "Secreto previo",
            next_secret: "Próximo hash secreto",
            op: "Operación",
            trx: "Transacción",
            op_type: "Tipo de operación",
            fee_payer: "Cuenta a cargo de las comisiones",
            key: "Llave pública",
            transactions: "Nro de transacciones",
            account_upgrade: "Cuenta a suscribir",
            lifetime: "Suscribir a membresía vitalicia",
            authorizing_account: "Cuenta autorizante",
            listed_account: "Listed account",
            new_listing: "New listing",
            asset_update: "Activo a actualizar",
            common_options: "Opciones comunes",
            new_options: "Nuevas opciones",
            new_producers: "Nuevos productores de feeds",
            asset_issue: "Monto a emitir",
            max_margin_period_sec: "Max margin period (s)",
            call_limit: "Call limit",
            short_limit: "Short limit",
            settlement_price: "Precio de liquidación"
        },
        assets: {
            title: "Activos",
            market: "SmartCoins",
            user: "Activos Emitidos por Usuarios (UIA)",
            symbol: "Simbolo",
            id: "ID",
            issuer: "Emisor",
            precision: "Precisión"
        },
        asset: {
            title: "Activo",
            not_found: "El activo %(name)s no existe",
            summary: {
                asset_type: "Tipo de Activo",
                issuer: "Emisor",
                current_supply: "Current supply",
                stealth_supply: "Stealth supply",
                market_fee: "Comisión de mercado",
                max_market_fee: "Comisión de mercado máxima"
            },
            price_feed: {
                title: "Price Feed",
                settlement_price: "Precio de liquidación",
                maintenance_collateral_ratio: "Relación colateral de mantenimiento (MCR)",
                maximum_short_squeeze_ratio: "Maximum short squeeze ratio (MSSR)"
            },
            fee_pool: {
                title: "Fondo de Comisiones",
                core_exchange_rate: "Core exchange rate (CER)",
                pool_balance: "Balance del Fondo",
                unclaimed_issuer_income: "Unclaimed issuer income"
            },
            permissions: {
                title: "Permisos",
                max_market_fee: "Comisión de mercado máxima",
                max_supply: "Emisión máxima",
                blacklist_authorities: "Blacklist authorities",
                blacklist_markets: "Blacklist markets",
                whitelist_authorities: "Whitelist authorities",
                whitelist_markets: "Whitelist markets"
            },
            price_feed_data: {
                title: "Price Feed Data",
                settlement_price: "Precio de liquidación",
                core_exchange_rate: "CER",
                maintenance_collateral_ratio: "MCR",
                maximum_short_squeeze_ratio: "MSSR",
                publisher: "Publisher",
                published: "Publicado"
            }
        },
        witnesses: {
            title: "Testigos",
            current: "Testigo actual",
            participation: "Grado de participación",
            pay: "Pago por bloque",
            budget: "Presupuesto restante",
            next_vote: "Próximo recuento de votos",
            card: "Ver tarjetas",
            table: "Ver tabla",
            rank: "Puesto",
            last_confirmed: "Ultimo confirmado",
            missed: "Bloques perdidos"

        },
        committee_members: {
            title: "Miembros del Comité",
            active: "Total de miembros del Comité activos"
        },
        committee_member: {
            title: "Miembro del Comité"
        },
        workers: {
            title: "Presupuestos por Trabajos"
        },
        proposals: {
            title: "Propuestas"
        },
        account: {
            title: "Cuenta"
        }
    },
    settings: {
        inverseMarket: "Invertir orientación del Mercado",
        unit: "Unidad preferida para esta cuenta",
        confirmMarketOrder: "Pedir confirmación en órdenes de mercado",
        locale: "Cambiar Idioma",
        confirm_yes: "Siempre",
        confirm_no: "Nunca",
        always_confirm: "Siempre pedir confirmación",
        wallets: "Billeteras",
        connection: "Conexión API",
        add_ws: "Agregar nueva API websocket",
        remove_ws: "Remover API websocket",
        faucet_address: "Faucet Address"
    },
    footer: {
        title: "Graphene",
        block: "Bloque de cabecera",
        loading: "Cargando..."
    },
    exchange: {
        price_history: "Gráfico de Precios",
        order_depth: "Profundidad de Mercado",
        market_history: "Historial de Mercado",
        balance: "Su balance",
        lowest_ask: "Pedido más bajo",
        highest_bid: "Puja más alta",
        total: "Total",
        value: "Valor",
        price: "Precio",
        time: "Date",
        latest: "Ultimo Precio",
        call: "Precio de Rescate (Call Price)",
        core_rate: "Tasa de Comisión",
        settle: "Precio de Liquidación",
        squeeze: "Precio Margin Call",
        maintenance: "Maintenance Call Price",
        your_price: "Your Call Price",
        volume: "Volumen",
        spread: "Margen (spread)",
        quantity: "Monto",
        buy: "Comprar",
        sell: "Vender",
        receive: "Recibir",
        vertical: "Vertical",
        horizontal: "Horizontal",
        confirm_buy: "Confimar orden: Comprar %(buy_amount)s %(buy_symbol)s al precio de %(price_amount)s %(price_symbol)s",
        confirm_sell: "Confirmar orden: Vender %(sell_amount)s %(sell_symbol)s al precio de %(price_amount)s %(price_symbol)s",
        stats:{
            t: "T",
            o: "O",
            c: "C",
            h: "H",
            l: "L",
            v: "V"
        }
    },
    markets: {
        base: "Activo base",
        market_search: "Buscar Mercados",
        filter: "Filtrar",
        core_rate: "Core rate",
        supply: "Supply",
        search: "Buscar",
        preferred: "Mis Mercados Favoritos"
    },
    wallet: {
        title: "Billetera",
        confirm: "Password (confirmar)",
        password: "Password",
        existing_password: "Password Existente",
        change_password: "Cambiar Password",
        change_wallet: "Cambiar Billetera",
        wallet_created: "Billetera Creada",
        create_wallet: "Crear Billetera",
        import_bts1: "Importar desde BitShares 0.9.3c",
        setup_wallet: "Configurar su Billetera",
        delete_wallet: "Eliminar Billetera",
        delete_confirm_line1: "Está usted ABSOLUTAMENTE seguro?",
        delete_confirm_line2: "Problemas inesperados van a ocurrir si usted no lee esto!",
        delete_confirm_line3: "Esta acción NO PUEDE ser revertida.",
        delete_wallet_name: "Eliminar Billetera (%(name)s)",
        balance_claims: "Balances Solicitados",
        download: "Descargar",
        name: "Nombre de la Billetera",
        create: "Crear",
        console: "Consola de Administración de la Billetera",
        create_backup: "Crear Backup",
        backup_brainkey: "Backup Brainkey",
        create_backup_of: "Crear Backup (%(name)s Wallet)",
        import_backup: "Importar Backup",
        restore_backup: "Restaurar Backup",
        import_keys: "Importar Llaves",
        brainkey: "Brainkey",
        new_wallet: "Nueva Billetera",
        active_wallet: "Billetera Activa",
        verified: "Verificado",
        verify_prior_backup: "Verificar Backup Previo",
        brainkey_not_verified: "Esta Brainkey no está verificada",
        cancel: "Cancelar",
        reset: "Resetear",
        done: "Hecho",
        verify: "Verificar",
        invalid_format: "Formato no Válido",
        enter_password: "Ingresar Password",
        downoad: "Descargar",
        new_wallet_name: "Nuevo nombre de Billetera",
        wallet_exist: "Esta Billetera ya existe, elija un nuevo nombre",
        wallet_exist_with_name: "La Billetera (%(name)s) ya existe,  por favor elija otro nombre",
        accept: "Aceptar",
        ready_to_restore: "Lista para Restaurar",
        restore_wallet_of: "Restaurar (%(name)s Wallet)",
        restore_success: "Billetera (%(name)s) restaurada exitosamente",
        change: "Cambiar (%(name)s Billetera)",
        import_20_notice1: "Importar su BACKUP BTS 2.0+ primero",
        import_20_notice2: "(si lo tiene)",
        loading_balances: "Cargando solicitud de balances",
        no_balance: "Sin solicitudes de balance",
        claim_balance: "Solicitar Balance",
        claim_balances: "Solicitar Balances",
        unclaimed: "Sin Solicitar",
        unclaimed_vesting: "Sin Solicitar (consolidando)",
        no_accounts: "Sin Cuentas",
        brainkey_no_match: "La Brainkey no coincide, intente denuevo",
        reenter_brainkey: "Re-Ingrese Brainkey",
        pwd4brainkey: "Ingrese el password para ver su brainkey",
        show_brainkey: "Mostrar Brainkey",
        brainkey_w1: "ADVERTENCIA: Imprima esta clave, o anótela.",
        brainkey_w2: "Cualquiera con acceso a su llave de recuperación",
        brainkey_w3: "tendrá acceso a los fondos de esta billetera.",
        custom_brainkey: "Brainkey Personalizada (avanzado)",
        last_backup: "Ultimo backup",
        never_backed_up: "Todavía no ha realizado un backup de esta Billetera",
        need_backup: "Esta Billetera necesita un backup",
        noneed_backup: "No es necesario un backup"
    },
    borrow: {
        borrow_btn: "Borrow %(asset)s",
        title: "%(asset_symbol)s Margin",
        no_valid: "No hay feeds válidos para %(asset_symbol)s",
        coll_ratio: "Relación colateral",
        call_limit: "Market Call Limit",
        adjust: "Ajustar Posición",
        close: "Cerrar Posición",
        update: "Actualizar",
        errors: {
            below: "Collateral ratio is too low, this position will be margin called instantly",
            collateral: "Balance colateral insuficiente"
        }
    },
    modal : {
      issue : {
        to: "Emitir A",
        amount: "Cantidad a Emitir",
        submit: "Emitir Asset"
      },
      withdraw : {
        amount: "Monto a Retirar",
        address: "Retirar al Address",
        submit: "Retirar"
      },
      ok: "OK"
    },
    init_error: {
        title: "Problemas al iniciar la aplicación",
        ws_status: "Estado de la Conexión Websocket",
        retry: "Volver a intentar",
        connected: "Connectado",
        not_connected: "No conectado"
    },
     refcode: {
         claim: "Claim",
         claim_refcode: "Claim Referral Code",
         refcode_optional: "Referral Code (optional)",
         enter_refcode: "Enter referral code"
     },
    gateway: {
        bridge: "Bridge",
        gateway: "Gateway",
        symbol: "Symbol",
        deposit_to: "Deposit To",
        balance: "Balance",
        generate: "Generate",
        deposit: "Deposit",
        withdraw: "Withdraw",
        inventory: "Inventory",
        scan_qr: "Scan QR",
        transwiser: {
            gateway: "Transwiser",
            visit_weidian: "Click to deposit",
            deposit_title: "Deposit RMB to %(asset)s",
            withdraw_title: "Withdraw %(asset)s to RMB",
            alipay: "ALIPAY Account Name",
            withdraw_note: "Currently only ALIPAY withdraw is supported.  Your asset will be converted at 1:1 ratio and send RMB to your ALIPAY account.",
            you_will_receive: "You will receive %(amount)s RMB"
        },
        meta: {
            open_website: "Open Website"
        }
    }
};
