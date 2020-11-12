package com.fabinout.dockercompose;

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
            .importPackages("com.fabinout.dockercompose");

        noClasses()
            .that()
            .resideInAnyPackage("com.fabinout.dockercompose.service..")
            .or()
            .resideInAnyPackage("com.fabinout.dockercompose.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.fabinout.dockercompose.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
