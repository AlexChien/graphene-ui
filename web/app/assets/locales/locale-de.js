module.exports = {
    languages: {
        en: "English",
        cn: "简体中文",
        fr: "Français",
        ko: "한국어",
        de: "Deutsch"        
    },
    header: {
        title: "Graphene UI",
        dashboard: "Hauptseite",
        explorer: "Explorer",
        exchange: "Börse",
        payments: "Transaktionen",
        logout: "Abmeldung",
        settings: "Einstellungen",
        current: "Aktives Konto"
    },
    account: {
        asset: "Asset",
        market_value: "Marktwert",
        hour_24: "24hr Wechsel",
        recent: "Letzte Aktivität",
        name: "Konto Name",
        member: {
            stats: "Mitgliederstatistiken",
            join: "Beitritt am",
            reg: "Registriert von",
            ref: "Empfohlen von",
            referrals: "Empfehlungen",
            rewards: "Belohnungen",
            cashback: "Skonto",
            vested: "Zugesichert"
        },
        connections: {
            known: "Bekannt von",
            "black": "Schwarzgelistet von"
        }
    },
    transfer: {
        from: "Von",
        amount: "Betrag",
        to: "An",
        memo: "Notiz",
        fee: "Gebühr",
        send: "Senden",
        final: "Endguthaben",
        balances: "Guthaben",
        errors: {
            req: "Plfichtfeld",
            pos: "Betrag darf nicht negativ sein",
            valid: "Bitte geben Sie einen positiven Betrag ein"
        },
        back: "ZURÜCK",
        confirm: "BESTÄTIGEN",
        broadcast: "Deine Überweisung wurde gesendet",
        again: "WEITERE ÜBERWEISUNG",
        see: "ÜBERWEISUNGSÜBERSICHT"
    },
    transaction: {
        sent: "Gesendet",
        to: "an",
        received: "Empfangen",
        from: "von",
        amount_sell: "Betrag",
        expiration: "Frist",
        fill_or: "sofortige Ausführung oder Annullierung",
        min_receive: "Mindestbetrag",
        seller: "Verkäufer",
        collateral: "Sicherheit/Pfand",
        coll_ratio: "Anfängliche Sicherheit (Verhältnis)",
        coll_maint: "Unterhalt der Sicherheit (Verhältnis)",
        "create_key": "Ein öffentlicher Schlüssel wurde erzeugt",
        reg_account: "Ein Konto wurde angelegt",
        was_reg_account: "registriert von",
        create_asset: "Neuen Asset erstellen",
        limit_order: "Limit-Order für den Verkauf platziert",
        limit_order_buy: "Limit-Order für den Ankauf platziert",
        limit_order_cancel: "Limit-Order abgebrochen. ID:",
        short_order: "Short-Order für Verkauf platziert",
        short_order_cancel: "Short-Order abgebrochen. ID:",
        at: "für",
        coll_of: "mit einer Sicherheit bestehend aus",
        call_order_update: "Call-Order aktualisiert",
        upgrade_account: "Kontostatus auf Lifetime Member aktualisiert.",
        update_account: "Konto aktualisiert",
        whitelist_account: "Konto zur Positivliste hinzugefügt",
        whitelisted_by: "Wurde zur Postitivliste hinzugefügt von Konto",
        transfer_account: "Das Konto wurde übertragen",
        update_asset: "Das Asset wurde aktualisiert",
        update_feed_producers: "Die Liste der Feed-Erzeuger wurde aktualisiert",
        feed_producer: "Werde Feed-Erzeuger für ein Asset",
        asset_issue: "Emittiert",
        was_issued: "Wurde emittiert",
        by: "von",
        burn_asset: "Vernichtet",
        fund_pool: "Asset-Gebührenpool finanziert mit",
        asset_settle: "Settlement erbeten für",
        asset_global_settle: "Globales Settlement erbeten für",
        publish_feed: "Neuer Feed wurde publiziert für Asset",
        delegate_create: "Neuer Delegate wurde angelegt",
        witness_create: "Neuer Witness wurde angelegt",
        witness_pay: "Witnesslohn ausgezahlt an Konto",
        witness_receive: "Received witness from witness",
        proposal_create: "Ein Vorschlag wurde erzeugt",
        proposal_update: "Ein Vorschlag wurde aktualisiert",
        proposal_delete: "Ein Vorschlag wurde gelöscht",
        withdraw_permission_create: "Einzugsermächtigung wurde verliegen an Konto",
        withdraw_permission_update: "Einzugsermächtigung wurde aktualisiert für Konto",
        withdraw_permission_claim: "Einzugsermächtigung wurde eingefordert für Konto",
        withdraw_permission_delete: "Einzugsermächtigung wurde aufgehoben für Konto",
        paid: "Bezahlt",
        obtain: "zu erhalten",
        global_parameters_update: "Globale Parameter aktualisiert",
        file_write: "Eine Datei wurde geschrieben",
        vesting_balance_create: "Ein Sperrfristguthaben wurde erzeugt",
        for: "für",
        vesting_balance_withdraw: "Sperrfristguthaben wurde abgehoben",
        bond_create_offer: "Ein Bondangebot wurde erstellt",
        bond_cancel_offer: "Ein Bondangebot wurde abgebrochen",
        bond_accept_offer: "Ein Bondangebot wurde akzeptiert",
        bond_claim_collateral: "Eine Sicherheit wurde eingefordert",
        bond_pay_collateral: "Eine Sicherheit wurde bezahlt",
        create_worker: "Ein Arbeiter wurde erzeugt. Bezahlung",
        custom: "Eine benutzerdefinierte Operation wurde definiert",
        order_id: "Order ID",
        trxTypes: {
            transfer: "Überweisung",
            limit_order_create: "Limit-Order",
            limit_order_cancel: "Limit-Order abbrechen",
            call_order_update: "Call-Order aktualisieren",
            account_create: "Konto erstellen",
            account_update: "Kontoaktualisierung",
            account_whitelist: "Konto Positivliste",
            account_upgrade: "Konto Upgrade",
            account_transfer: "Konto Überweisung",
            asset_create: "Asset erstellen",
            asset_update: "Asset aktualisieren",
            asset_update_bitasset: "SmartCoin aktualisieren",
            asset_update_feed_producers: "Asset Feederzeuger aktualisieren",
            asset_issue: "Asset emittieren",
            asset_reserve: "Assetanteile vernichten",
            asset_fund_fee_pool: "Asset Gebührenpool finanzieren",
            asset_settle: "Asset Settlement",
            asset_global_settle: "Globales Asset Settlement",
            asset_publish_feed: "Asset Feed publiszieren",
            delegate_create: "Delegate erstellen",
            witness_create: "Witness erstellen",
            witness_withdraw_pay: "Witnesslohn ausbezahlen",
            proposal_create: "Proposal erstellen",
            proposal_update: "Proposal aktualisieren",
            proposal_delete: "Proposal löschen",
            withdraw_permission_create: "Einzugsermächtigung erstellen",
            withdraw_permission_update: "Einzugsermächtigung aktualisiert",
            withdraw_permission_claim: "Einzugsermächtigung eingefordert",
            withdraw_permission_delete: "Einzugsermächtigung aufgehoben",
            fill_order: "Order ausgeführt",
            delegate_update_global_parameters: "Globale Parameters aktualisiert",
            vesting_balance_create: "Sperrfristguthaben erstellt",
            vesting_balance_withdraw: "Sperrfristguthaben eingefordert",
            worker_create: "Arbeiter erstellt",
            custom: "benutzerdefiniert",
            assert: "Assert Pperation",
            balance_claim: "Guthaben eingefordert",
            override_transfer: "Transaktion überschreiben"
        }
    },
    explorer: {
        accounts: {
            title: "Konten"
        },
        blocks: {
            title: "Blockchain",
            globals: "Globale Einstellungen",
            recent: "Letzte Blöcke"
        },
        block: {
            title: "Block",
            id: "Block ID",
            witness: "Witness",
            count: "Transaktionszähler",
            date: "Datum",
            previous: "Vorherige",
            previous_secret: "Vorheriges Geheimnis",
            next_secret: "Hash des nächsten Geheimnisses",
            op: "Aktion",
            trx: "Transaktion",
            op_type: "Aktionstyp",
            fee_payer: "Gebührenkonto",
            key: "Öffentlicher Schlüssel",
            transactions: "Anzahl der Transaktionen",
            account_upgrade: "Kontoerweiterung",
            lifetime: "Lebenslanges Mitglied werden",
            authorizing_account: "Kontovollmacht",
            listed_account: "Kontenübersicht",
            new_listing: "Neuer Eintrag",
            asset_update: "zu aktualisierender Asset",
            common_options: "Common Optionen",
            new_options: "New Option",
            new_producers: "Neue Feederzeuger",
            asset_issue: "Zu emittierender Betrag",
            max_margin_period_sec: "Max Margin Periode (s)",
            call_limit: "Call-Limit",
            short_limit: "Short-Limit",
            settlement_price: "Settlement-Preis"
        },
        assets: {
            title: "Assets",
            market: "SmartCoins",
            user: "User Issued Assets",
            symbol: "Symbol",
            id: "ID",
            issuer: "Herausgeber",
            precision: "Genauigkeit"
        },
        asset: {
            title: "Asset"
        },
        witnesses: {
            title: "Witnesses"
        },
        delegates: {
            title: "Delegates"
        },
        delegate: {
            title: "Delegate"
        },
        workers: {
            title: "Arbeiter"
        },
        proposals: {
            title: "Vorschlag"
        },
        account: {
            title: "Konto"
        }
    },
    settings: {
        inverseMarket: "Bevorzugte Marktorientierung",
        unit: "Bevorzugte Rechnungseinheit",
        confirmMarketOrder: "Ask for confirmation of market orders",
        locale: "Sprache wechseln",
        confirm_yes: "Always",
        confirm_no: "Never",
        always_confirm: "Always ask for confirmation"
    }
};
