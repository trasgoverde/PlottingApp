package com.dipassio.plop;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.dipassio.plop");

        noClasses()
            .that()
            .resideInAnyPackage("com.dipassio.plop.service..")
            .or()
            .resideInAnyPackage("com.dipassio.plop.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.dipassio.plop.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
